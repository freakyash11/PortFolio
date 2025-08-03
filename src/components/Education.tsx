'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { FiBook, FiBriefcase } from 'react-icons/fi';
import { useRef } from 'react';

const educationData = [
  {
    period: '2022-2026',
    institution: 'Bhagwan Parshuram Institute of Technology',
    degree: 'B. Tech',
    stream: 'Electronics and Communication Engineering',
    percentage: '7.03 CGPA'
  },
  {
    period: '2022',
    institution: 'Bharatiya Vidya Bhavan',
    degree: 'Senior Secondary',
    percentage: '83.33%',
    stream: 'Science'
  },
  {
    period: '2020',
    institution: 'Bhartiya Vidya Bhavan',
    degree: 'High School',
    percentage: '86.66%'
  }
];

const workData = [
  {
    period: 'Jan 2025 - Present',
    company: 'SaralTech',
    position: 'Software Developer Intern',
    techstack: 'CSS, ReactJS, NodeJS, MongoDB, ExpressJS, Tailwind CSS, Bootstrap, Git, Github'
  },
  {
    period: 'Aug 2024 - Nov 2024',
    company: 'ADM Education and Welfare Society',
    position: 'Web Development Intern',
    techstack: 'NextJS, SQL, Tailwind CSS, Bootstrap, Git, Github, Drizzle ORM, CloudFlare'
  }
];

// Type definitions
interface EducationItem {
  period: string;
  institution: string;
  degree: string;
  stream?: string;
  percentage: string;
}

interface WorkItem {
  period: string;
  company: string;
  position: string;
  techstack: string;
}

interface TimelineItemProps {
  item: EducationItem | WorkItem;
  index: number;
  isWork?: boolean;
}

// Timeline Item Component with scroll animation
const TimelineItem = ({ item, index, isWork = false }: TimelineItemProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 1", "end 0"]
  });

  // Transform scroll progress - beads move downward as you scroll down
  const beadY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const beadScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const beadOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-l-2 border-yellow pl-6 relative"
    >
      <motion.div 
        className="absolute w-3 h-3 bg-yellow rounded-full -left-[7px] top-1 shadow-lg"
        style={{ 
          y: beadY,
          scale: beadScale,
          opacity: beadOpacity
        }}
        whileHover={{ scale: 1.5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Glowing effect */}
        <motion.div 
          className="absolute inset-0 bg-yellow rounded-full"
          animate={{ 
            boxShadow: [
              "0 0 0 0 rgba(245, 158, 11, 0.7)",
              "0 0 0 8px rgba(245, 158, 11, 0)",
              "0 0 0 0 rgba(245, 158, 11, 0)"
            ]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatType: "loop" 
          }}
        />
      </motion.div>
      
      <span className="text-sm text-secondary">{item.period}</span>
      <h4 className="heading text-xl mt-1">
        {isWork ? (item as WorkItem).company : (item as EducationItem).degree}
      </h4>
      <p className="text-secondary">
        {isWork ? (item as WorkItem).position : (item as EducationItem).stream}
      </p>
      {!isWork && (
        <>
          <p className="text-secondary">{(item as EducationItem).institution}</p>
          <p className="text-secondary">{(item as EducationItem).percentage}</p>
        </>
      )}
      {isWork && (
        <p className="text-secondary text-md md:text-base">
          <span className="font-bold">Tech Stack:</span> {(item as WorkItem).techstack}
        </p>
      )}
    </motion.div>
  );
};

export default function Education() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"]
  });

  // Create a more pronounced floating effect for the entire timeline
  const timelineY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="education" className="section bg-muted" ref={containerRef}>
      <div className="container">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center bg-purple-light text-[#5221E6] px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            Education & Work
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading text-3xl md:text-4xl mb-6 flex items-center justify-center"
          >
            <span className="text-foreground">My </span>
            <span className="bg-yellow-gradient gradient-text mx-2">Academic and</span>
            <span className="bg-purple-gradient gradient-text mr-2">Professional</span>
            <span className="text-foreground">Journey</span>
          </motion.h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          style={{ y: timelineY }}
        >
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background rounded-lg p-8"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center text-white text-xl mr-4">
                <FiBook />
              </div>
              <h3 className="heading text-2xl">Education</h3>
            </div>

            <div className="space-y-8">
              {educationData.map((item, index) => (
                <TimelineItem 
                  key={index} 
                  item={item} 
                  index={index} 
                  isWork={false}
                />
              ))}
            </div>
          </motion.div>

          {/* Work Experience Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background rounded-lg p-8"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center text-white text-xl mr-4">
                <FiBriefcase />
              </div>
              <h3 className="heading text-2xl">Work Experience</h3>
            </div>

            <div className="space-y-8">
              {workData.map((item, index) => (
                <TimelineItem 
                  key={index} 
                  item={item} 
                  index={index} 
                  isWork={true}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}