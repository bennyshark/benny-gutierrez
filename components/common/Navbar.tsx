'use client'

import React, { useState, useEffect } from 'react'
import { Home, Code, FolderGit2, Mail, Menu, X, Briefcase } from 'lucide-react'
import Logo from './Logo'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    setIsMenuOpen(false);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'experience', label: 'Experience', icon: Briefcase },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-zinc-900/70 backdrop-blur-xl border-b border-zinc-800/50 shadow-lg shadow-black/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <button
            onClick={() => scrollToSection('home')}
            className="hover:opacity-80 transition-opacity"
          >
            <Logo size="sm" />
          </button>

          {/* desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="relative flex items-center gap-2 px-4 py-2 text-text-secondary hover:text-text-primary transition-colors font-medium group text-sm"
                >
                  <item.icon className="size-3.5 text-text-muted group-hover:text-primary transition-colors" />
                  <span>{item.label}</span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-3/4" />
                </button>
              </li>
            ))}
            <li className="ml-3">
              <a
                href="mailto:benedictgutierrezcs25@gmail.com"
                className="flex items-center gap-2 px-5 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-all border border-primary/20 text-sm font-medium"
              >
                <Mail className="size-3.5" />
                <span>Let&apos;s Connect</span>
              </a>
            </li>
          </ul>

          {/* mobile toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />

        <div
          className={`absolute top-0 right-0 h-full w-72 sm:w-80 bg-zinc-900 border-l border-zinc-800 shadow-2xl transform transition-all duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-5 border-b border-zinc-800">
              <Logo size="sm" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="w-full flex items-center gap-3 px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-zinc-800/50 rounded-lg transition-all font-medium group"
                    >
                      <item.icon className="size-4 text-text-muted group-hover:text-primary transition-colors" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="p-4 border-t border-zinc-800">
              <a
                href="mailto:benedictgutierrezcs25@gmail.com"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-all border border-primary/20 font-medium text-sm"
              >
                <Mail className="size-4" />
                <span>Let&apos;s Connect</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
