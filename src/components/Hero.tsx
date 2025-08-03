'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowDown, FiArrowRight, FiGithub, FiLinkedin, FiTwitter, FiDownload } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import SplitText from './SplitText';
import RotatingText from './react-bits/RotatingText';
import ProfileCard from './react-bits/ProfileCard';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden relative">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7"
          >
            <div className="inline-flex items-center bg-yellow-light text-yellow px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>Available for freelance work</span>
            </div>
            <div className="heading text-4xl md:text-5xl lg:text-6xl mb-6">
              <SplitText 
                text="Hey, I'm Yash" 
                splitType="words"
                delay={150}
                duration={0.8}
                from={{ opacity: 0, y: 50 }}
                to={{ opacity: 1, y: 0 }}
                className="block mb-2"
              />
              <div className="flex items-center flex-wrap">
                <span className="mr-2">I'm</span>
                <RotatingText
                  texts={['Problem Solver', 'Developer', 'Tech Enthusiast']}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>
            </div>
            <p className="text-secondary text-lg md:text-xl mb-8 max-w-xl">
              I design and develop services for customers of all sizes, 
              specializing in creating stylish, modern websites, web services and online stores.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link href="#projects" className="btn btn-secondary hover:bg-green-dark transition-colors">
                View Work <FiArrowRight className="ml-2" />
              </Link>
              <a 
                href="https://drive.google.com/file/d/1-MOIirCeYvMm2JDMzw_0GJ-d376pBR7r/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-accent hover:bg-yellow-dark transition-colors"
              >
                Download CV <FiDownload className="ml-2" />
              </a>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <a
                href="https://github.com/freakyash11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary text-xl transition-colors"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="https://leetcode.com/u/kuwarbiyash/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-yellow text-xl transition-colors"
                aria-label="LeetCode"
              >
                <SiLeetcode />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-blue text-xl transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/yash-kuwarbi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-blue text-xl transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5 relative"
          >
            <ProfileCard 
              avatarUrl="/images/profile/profile1.png"
              miniAvatarUrl="/images/profile/profile1.png"
              name="Yash Singh Kuwarbi"
              title="Software Developer"
              // handle="kuwarbiyash@gmail.com"
              status="Available for freelance work"
              contactText="Contact"
              showUserInfo={true}
              enableTilt={true}
              className="w-full max-w-md mx-auto"
              behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)"
              innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
              onContactClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY > 100 ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-sm text-secondary mb-2">Scroll Down</span>
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
          <FiArrowDown className="text-green animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
} 