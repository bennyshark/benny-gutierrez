// app/api/chat/route.ts
// AI Router Approach: Uses cheap AI (Haiku) to classify, powerful AI (Sonnet) to answer

import Anthropic from "@anthropic-ai/sdk";
import { portfolioData } from "@/data/portfolio-data";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { message, conversationHistory } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    // ═══════════════════════════════════════════════════════════
    // STEP 1: Use CLAUDE HAIKU 4.5 (Cheap & Fast) to classify
    // ═══════════════════════════════════════════════════════════
    
    const routerPrompt = `You are a data routing AI. Analyze the user's question and determine which data categories are needed.

Available categories:
- "personal": Name, role, contact info, location, bio
- "skills": Programming languages, frameworks, tools, technologies
- "projects": Portfolio projects, apps, things built
- "experience": Work history, job positions, achievements
- "interests": Hobbies, favorite anime, personal preferences
- "favoriteProject": Favorite project and why

Rules:
1. Return ONLY a JSON array of category names
2. Include ONLY categories directly relevant to answer the question
3. For greetings/general questions, include ["personal"]
4. Be conservative - don't include unnecessary categories

Examples:
"What have you built?" → ["projects"]
"Do you know React?" → ["skills"]
"Where do you work?" → ["experience"]
"What anime do you watch?" → ["interests"]
"Tell me about yourself" → ["personal", "skills", "projects"]
"What's your favorite project?" → ["favoriteProject", "projects"]
"Hi!" → ["personal"]

Question: "${message}"

Return ONLY the JSON array:`;

    console.log("🔍 Router AI (Haiku 4.5) analyzing...");
    const startRouter = Date.now();

    const routerResponse = await client.messages.create({
      model: "claude-haiku-4-5-20251001", // Haiku 4.5: $0.25/$1.25 per 1M
      max_tokens: 100,
      messages: [{
        role: "user",
        content: routerPrompt,
      }],
    });

    const routerTime = Date.now() - startRouter;
    console.log(`⏱️  Router took: ${routerTime}ms`);

    // Parse router response
    const routerText =
      routerResponse.content[0].type === "text"
        ? routerResponse.content[0].text
        : "[]";

    let neededCategories: string[];
    try {
      neededCategories = JSON.parse(routerText.trim());
      console.log("📋 Categories needed:", neededCategories);
    } catch (e) {
      console.error("❌ Failed to parse router:", routerText);
      // Fallback to safe defaults
      neededCategories = ["personal", "skills", "projects"];
    }

    // ═══════════════════════════════════════════════════════════
    // STEP 2: Load ONLY the data categories identified by router
    // ═══════════════════════════════════════════════════════════

    let relevantData: any = {};

    neededCategories.forEach((category: string) => {
      switch (category) {
        case "personal":
          relevantData.personal = portfolioData.personal;
          break;
        case "skills":
          relevantData.skills = portfolioData.skills;
          break;
        case "projects":
          relevantData.projects = portfolioData.projects;
          break;
        case "experience":
          relevantData.experience = portfolioData.experience;
          break;
        case "interests":
          relevantData.interests = portfolioData.interests;
          break;
        case "favoriteProject":
          relevantData.favoriteProject = portfolioData.favoriteProject;
          break;
      }
    });

    // ═══════════════════════════════════════════════════════════
    // STEP 3: Use CLAUDE SONNET 4.5 (Powerful) to answer
    // ═══════════════════════════════════════════════════════════

    const mainSystemPrompt = `You are an AI assistant for Benedict Gutierrez's (also known as Benny) portfolio website.  Answer professionally too.

You have been provided with ONLY the relevant data needed to answer this question. Answer naturally and helpfully.

RELEVANT DATA:
${JSON.stringify(relevantData, null, 2)}

Guidelines:
- Be friendly, conversational, and helpful
- Keep responses concise (2-4 sentences typically)
- Use a natural, casual tone
- If asked about something not in the data, politely say so
- Encourage visitors to check out projects or reach out`;

    console.log("🤖 Main AI (Sonnet 4.5) generating...");
    const startMain = Date.now();

    const messages: Anthropic.MessageParam[] = conversationHistory || [];
    messages.push({
      role: "user",
      content: message,
    });

    const mainResponse = await client.messages.create({
      model: "claude-sonnet-4-5-20250929", // Sonnet 4.5: $3/$15 per 1M
      max_tokens: 1024,
      system: mainSystemPrompt,
      messages: messages,
    });

    const mainTime = Date.now() - startMain;
    console.log(`⏱️  Main AI took: ${mainTime}ms`);
    console.log(`⏱️  Total: ${routerTime + mainTime}ms`);

    const assistantMessage =
      mainResponse.content[0].type === "text"
        ? mainResponse.content[0].text
        : "";

    return NextResponse.json({
      message: assistantMessage,
      conversationHistory: [
        ...(conversationHistory || []),
        {
          role: "user",
          content: message,
        },
        {
          role: "assistant",
          content: assistantMessage,
        },
      ],
    });
  } catch (error: any) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      {
        error: error.message || "Failed to process chat request",
      },
      { status: 500 }
    );
  }
}