"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const renderMarkdown = (text: string): (string | React.ReactElement)[] => {
  const parts: (string | React.ReactElement)[] = [];
  let lastIndex = 0;
  let key = 0;

  const pattern = /(\*\*[^*]+\*\*)|(\bhttps?:\/\/[^\s]+)|(\[([^\]]+)\]\(([^)]+)\))/g;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    if (match[1]) {
      const boldText = match[1].slice(2, -2);
      parts.push(<strong key={key++} className="font-semibold text-text-primary">{boldText}</strong>);
    } else if (match[3]) {
      parts.push(
        <a key={key++} href={match[5]} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline font-medium">
          {match[4]}
        </a>
      );
    } else if (match[2]) {
      parts.push(
        <a key={key++} href={match[2]} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline break-all">
          {match[2]}
        </a>
      );
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) parts.push(text.substring(lastIndex));
  return parts.length > 0 ? parts : [text];
};

interface ChatBotProps {
  onOpenChange?: (isOpen: boolean) => void;
}

export default function ChatBot({ onOpenChange }: ChatBotProps = {}) {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    onOpenChange?.(isOpen);
  }, [isOpen, onOpenChange]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        role: "assistant",
        content:
          "Hello! I'm Benny AI Assistant. I can help answer questions about Benedict's projects, technical skills, and professional experience. What would you like to know?",
      }]);
    }
  }, [isOpen, messages.length]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setIsLoading(true);

    const newMessages: Message[] = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage, conversationHistory: messages }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();
      setMessages([...newMessages, { role: "assistant", content: data.message }]);
    } catch {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Sorry, I encountered an error. Please try again or reach out to Benedict directly at benedictgutierrezcs25@gmail.com" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 p-3 sm:p-4 bg-primary text-bg-base rounded-full shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-110 z-[60] group"
          aria-label="Open chat"
        >
          <MessageCircle className="size-5 sm:size-6" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
          <span className="hidden sm:block absolute bottom-full right-0 mb-2 px-4 py-2 bg-zinc-800 text-text-primary text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none border border-zinc-700">
            ask me anything!
          </span>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[380px] h-[500px] sm:h-[600px] max-h-[calc(100vh-6rem)] bg-zinc-900 rounded-xl sm:rounded-2xl shadow-2xl border border-zinc-800 flex flex-col z-50 overflow-hidden">
          {/* header */}
          <div className="bg-zinc-800/80 backdrop-blur-sm border-b border-zinc-700/50 p-3 sm:p-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="font-display font-semibold text-sm sm:text-base text-text-primary">benny ai assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-zinc-700 rounded-lg transition-colors text-text-muted hover:text-text-primary">
              <X className="size-4" />
            </button>
          </div>

          {/* messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-zinc-950/50">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-3 sm:px-4 py-2 sm:py-2.5 ${
                    msg.role === "user"
                      ? "bg-primary/20 text-text-primary border border-primary/20"
                      : "bg-zinc-800/80 text-text-secondary border border-zinc-700/50"
                  }`}
                >
                  <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
                    {msg.role === "assistant" ? renderMarkdown(msg.content) : msg.content}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800/80 border border-zinc-700/50 rounded-2xl px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2">
                  <Loader2 className="size-3 sm:size-4 animate-spin text-primary" />
                  <p className="text-xs sm:text-sm text-text-muted">thinking...</p>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* input */}
          <div className="p-3 sm:p-4 bg-zinc-900 border-t border-zinc-800 flex-shrink-0">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="ask about projects, skills..."
                className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-zinc-800 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 text-xs sm:text-sm text-text-primary placeholder-text-muted"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="p-2 sm:p-2.5 bg-primary/20 text-primary rounded-xl hover:bg-primary/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0 border border-primary/20"
                aria-label="Send message"
              >
                <Send className="size-4 sm:size-5" />
              </button>
            </div>
            <p className="text-[10px] sm:text-xs text-text-muted mt-2 text-center">
              ai can make mistakes.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
