'use client';

import { motion } from 'framer-motion';
import {
  FiLayout,
  FiPenTool,
  FiCode,
  FiSmartphone,
  FiDatabase,
  FiTool,
} from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Languages',
    icon: <FiLayout />,
    skills: [
      { name: 'Python', proficiency: 80 },
      { name: 'HTML', proficiency: 98 },
      { name: 'CSS', proficiency: 98 },
      { name: 'C', proficiency: 95 },
      { name: 'C++', proficiency: 99 },
      { name: 'JavaScript', proficiency: 90 }
    ],
  },
  {
    title: ' Databases And Libraries',
    icon: <FiPenTool />,
    skills: [
      { name: 'MongoDB', proficiency: 90 },
      { name: 'SQL', proficiency: 94 },
      { name: 'ReactJS', proficiency: 97 },
      { name: 'Libuv', proficiency: 90 },
      { name: 'GSAP', proficiency: 90 },
    ],
  },
  {
    title: 'FrameWork',
    icon: <FiCode />,
    skills: [
      { name: 'Tailwind CSS', proficiency: 92 },
      { name: 'Bootstrap', proficiency: 95},
      { name: 'ExpressJS', proficiency: 88 },
      { name: 'NextJS', proficiency: 94 },
      { name: 'Three.js', proficiency: 88 },
    ],
  },
  {
    title: 'Other',
    icon: <FiTool />,
    skills: [
      { name: 'NodeJS', proficiency: 88 },
      { name: 'Mongoose', proficiency: 88 },
      { name: 'Git', proficiency: 93 },
      { name: 'Github', proficiency: 97 },
      { name: 'Drizzle ORM', proficiency: 95 },
      { name: 'CloudFlare', proficiency: 91 },
      { name: 'Data Structures', proficiency: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-yellow-light text-yellow px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>Professional Skills</span>
          </div>
          <h2 className="heading text-3xl md:text-4xl mb-4">Skills & Expertise</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            I've developed expertise in various design tools and technologies throughout my career.
            Here's an overview of my skills and proficiency levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-background p-6 rounded-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 purple-bg rounded-full flex items-center justify-center text-primary text-xl mr-4">
                  {category.icon}
                </div>
                <h3 className="heading text-xl">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-secondary text-sm">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 + categoryIndex * 0.2 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 