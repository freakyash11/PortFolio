'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

// Sample project data
const projects = [
  {
    id: 1,
    title: 'Horizone Travel Blogs',
    category: 'FullStack',
    description: 'It is a dynamic travel blog platform featuring AI-generated content, helping users explore destinations, share experiences, and discover unique travel stories effortlessly.',
    technologies: ['ReactJS', 'Appwrite', 'Vite', 'Tailwind CSS', 'Google Gemini'],
    liveUrl: 'https://horizonetravelblog.netlify.app/',
    githubUrl: 'https://github.com/freakyash11/Horizone-Travel-Blogs.git',
    imageUrl: '/projects/Blog.png', // 5-second preview animation
  },
  {
    id: 2,
    title: 'PrepMe',
    category: 'FullStack',
    description: 'Prepwise is a sleek Next.js-based platform for job interview preparation, featuring AI integration, Firebase authentication, TailwindCSS styling, and Vapi voice agents',
    technologies: ['Next.js', 'Firebase', 'Tailwind CSS', 'Vapi AI', 'Google Gemini', 'Zod'],
    liveUrl: 'https://aiprep2.vercel.app/',
    githubUrl: 'https://github.com/freakyash11/aiprep2.git',
    imageUrl: '/projects/prepMe.png', // Interactive demo animation
  },
  {
    id: 3,
    title: 'Velvet',
    category: 'Designing',
    description: 'A visually stunning cocktail website built with React, Tailwind CSS, and GSAP, featuring scroll-driven animations, SplitText reveals, parallax effects, pinned sections, video syncing, carousels, and a fully responsive design.',
    technologies: ['React', 'GSAP', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://gsap-cocktails-9gse.vercel.app/',
    githubUrl: 'https://github.com/freakyash11/gsap_cocktails.git',
    imageUrl: '/projects/Velvet.gif', // Add your image path here
  },
  // {
  //   id: 4,
  //   title: 'Fitness App',
  //   category: 'Mobile Development',
  //   description: 'A mobile application that helps users track their workouts, nutrition, and fitness goals.',
  //   technologies: ['React Native', 'Firebase', 'Redux'],
  //   liveUrl: '#',
  //   githubUrl: '#',
  //   imageUrl: '/projects/fitness-app.jpg', // Add your image path here
  // },
  // {
  //   id: 5,
  //   title: 'Brand Identity',
  //   category: 'Branding',
  //   description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines.',
  //   technologies: ['Illustrator', 'Photoshop', 'InDesign'],
  //   liveUrl: '#',
  //   githubUrl: '#',
  //   imageUrl: '/projects/brand-identity.jpg', // Add your image path here
  // },
  // {
  //   id: 6,
  //   title: 'Portfolio Website',
  //   category: 'Web Development',
  //   description: 'A modern portfolio website built with Next.js and Framer Motion for smooth animations.',
  //   technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  //   liveUrl: '#',
  //   githubUrl: '#',
  //   imageUrl: '/projects/portfolio-website.jpg', // Add your image path here
  // },
];

// Filter categories
const categories = ['All', 'FrontEnd', 'FullStack', 'Designing', 'Branding'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-green-light text-green px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>My Portfolio</span>
          </div>
          <h2 className="heading text-3xl md:text-4xl mb-4">Featured Projects</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Explore my recent work and projects that showcase my design skills and expertise in creating
            digital solutions.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-muted hover:bg-primary/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-muted rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                      aria-label="View Project"
                    >
                      <FiGithub />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="heading text-xl">{project.title}</h3>
                  <span className="text-sm text-secondary">{project.category}</span>
                </div>
                <p className="text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-background text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 