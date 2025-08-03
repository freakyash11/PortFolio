'use client';

import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="font-poppins font-bold text-2xl inline-block mb-6">
              Yash<span className="text-primary">.</span>
            </Link>
            <p className="text-secondary mb-8 max-w-md">
               A Passionate Full-Stack Developer and Software Engineer crafting fast, responsive, and intuitive web experiences
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/freakyash11"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-secondary hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="https://leetcode.com/u/kuwarbiyash/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-secondary hover:text-primary transition-colors"
                aria-label="Dribbble"
              >
                <SiLeetcode />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-secondary hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/yash-kuwarbi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-secondary hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#home" className="text-secondary hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-secondary hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-secondary hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-secondary hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                {/* <Link href="#testimonials" className="text-secondary hover:text-primary transition-colors">
                  Testimonials
                </Link> */}
              </li>
              <li>
                <Link href="#contact" className="text-secondary hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="text-secondary">
                <span className="font-medium text-foreground block">Email:</span>
                <a href="mailto:mark@example.com" className="hover:text-primary transition-colors">
                  kuwarbiyash@gmail.com
                </a>
              </li>
              <li className="text-secondary">
                <span className="font-medium text-foreground block">Phone:</span>
                <a href="tel:+11234567890" className="hover:text-primary transition-colors">
                  +91 7669567755
                </a>
              </li>
              <li className="text-secondary">
                <span className="font-medium text-foreground block">Address:</span>
                New Delhi, India
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-border">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-secondary text-sm">
            © {new Date().getFullYear()} Mark. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
} 