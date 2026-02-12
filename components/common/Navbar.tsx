'use client'

import React, { useState, useEffect } from 'react'
import { Home, Code, FolderGit2, Mail, Menu, X, Briefcase } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    setIsMenuOpen(false); // Close menu after clicking
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/80 backdrop-blur-md'
      } border-b border-slate-200/50`}>
        <div className='max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4'>
          
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className='font-bold text-xl sm:text-2xl bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent hover:scale-105 transition-transform'
          >
            BENNY
          </button>

          {/* Desktop Navigation */}
          <ul className='hidden md:flex items-center gap-6 lg:gap-8'>
            <li>
              <button 
                onClick={() => scrollToSection('home')}
                className='flex items-center gap-2 text-slate-700 hover:text-orange-600 transition-colors font-medium group'
              >
                <Home className='size-4 group-hover:scale-110 transition-transform' />
                <span>Home</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('skills')}
                className='flex items-center gap-2 text-slate-700 hover:text-orange-600 transition-colors font-medium group'
              >
                <Code className='size-4 group-hover:scale-110 transition-transform' />
                <span>Skills</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('projects')}
                className='flex items-center gap-2 text-slate-700 hover:text-orange-600 transition-colors font-medium group'
              >
                <FolderGit2 className='size-4 group-hover:scale-110 transition-transform' />
                <span>Projects</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('experience')}
                className='flex items-center gap-2 text-slate-700 hover:text-orange-600 transition-colors font-medium group'
              >
                <Briefcase className='size-4 group-hover:scale-110 transition-transform' />
                <span>Experience</span>
              </button>
            </li>
            <li>
              <a 
                href="mailto:benedictgutierrezcs25@gmail.com"
                className='flex items-center gap-2 px-4 lg:px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all hover:scale-105 shadow-md hover:shadow-lg font-medium text-sm lg:text-base'
              >
                <Mail className='size-4' />
                <span>Let's Connect</span>
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden p-2 text-slate-700 hover:text-orange-600 transition-colors'
            aria-label='Toggle menu'
          >
            {isMenuOpen ? <X className='size-6' /> : <Menu className='size-6' />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className='absolute inset-0 bg-black/50 backdrop-blur-sm'
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-64 sm:w-80 bg-white shadow-2xl transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className='flex flex-col h-full'>
            {/* Drawer Header */}
            <div className='flex items-center justify-between p-4 border-b border-slate-200'>
              <span className='font-bold text-xl bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent'>
                BENNY
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className='p-2 text-slate-700 hover:text-orange-600 transition-colors'
                aria-label='Close menu'
              >
                <X className='size-6' />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className='flex-1 overflow-y-auto p-4'>
              <ul className='space-y-2'>
                <li>
                  <button
                    onClick={() => scrollToSection('home')}
                    className='w-full flex items-center gap-3 px-4 py-3 text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all font-medium group'
                  >
                    <Home className='size-5 group-hover:scale-110 transition-transform' />
                    <span>Home</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('skills')}
                    className='w-full flex items-center gap-3 px-4 py-3 text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all font-medium group'
                  >
                    <Code className='size-5 group-hover:scale-110 transition-transform' />
                    <span>Skills</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className='w-full flex items-center gap-3 px-4 py-3 text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all font-medium group'
                  >
                    <FolderGit2 className='size-5 group-hover:scale-110 transition-transform' />
                    <span>Projects</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('experience')}
                    className='w-full flex items-center gap-3 px-4 py-3 text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all font-medium group'
                  >
                    <Briefcase className='size-5 group-hover:scale-110 transition-transform' />
                    <span>Experience</span>
                  </button>
                </li>
              </ul>
            </nav>

            {/* Contact Button */}
            <div className='p-4 border-t border-slate-200'>
              <a
                href="mailto:benedictgutierrezcs25@gmail.com"
                className='w-full flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all hover:scale-105 shadow-md hover:shadow-lg font-medium'
              >
                <Mail className='size-5' />
                <span>Let's Connect</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}