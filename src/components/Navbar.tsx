'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import GooeyNav from './GooeyNav';
import { useScrollspy, scrollToSection } from '@/hooks/useScrollspy';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

// Format navLinks for GooeyNav
const gooeyNavItems = navLinks.map(link => ({
  label: link.name,
  href: link.href
}));

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  // Use scrollspy to track active section
  const activeSection = useScrollspy(navLinks.map(link => link.href));

  // Check for user's preferred color scheme and saved preference
  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      // If no saved preference, check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      // Switch to light mode
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      // Switch to dark mode
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md shadow-sm py-4' : 'py-6 bg-transparent'
      }`}
    >
      <style jsx global>{`
        :root {
          --color-1: #4ade80; /* Green color */
          --color-2: #22d3ee; /* Cyan color */
          --color-3: #a78bfa; /* Purple color */
          --color-4: #fbbf24; /* Yellow/amber color */
        }
      `}</style>
      
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-poppins font-bold text-2xl">
          Yash<span className="text-green">.</span>
        </Link>

        {/* Desktop Navigation with GooeyNav */}
        <div className="hidden md:block">
          <GooeyNav 
            items={gooeyNavItems.map(item => ({
              ...item,
              onClick: (e: React.MouseEvent) => {
                e.preventDefault();
                const targetId = item.href.replace('#', '');
                scrollToSection(targetId, 80);
              }
            }))}
            colors={[1, 2, 3, 4]} 
            particleCount={12}
            animationTime={500}
            particleDistances={[80, 8]}
          />
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 rounded-full bg-yellow-light flex items-center justify-center text-secondary hover:text-yellow transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact', 80);
            }}
            className="btn btn-secondary"
          >
            Let&apos;s Talk
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 rounded-full bg-yellow-light flex items-center justify-center text-secondary hover:text-yellow transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
          <button
            className="text-2xl text-green"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background border-t border-border"
        >
          <div className="container py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                className={`py-2 font-medium hover:text-green transition-colors w-full text-left ${
                  activeSection === link.href ? 'text-green' : ''
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href, 80);
                  setIsOpen(false);
                }}
              >
                {link.name}
              </button>
            ))}
            <button
              className="btn btn-accent w-full text-center"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact', 80);
                setIsOpen(false);
              }}
            >
              Let's Talk
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
} 