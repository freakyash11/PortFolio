'use client';

import { motion } from 'framer-motion';
import { FiBook, FiBriefcase } from 'react-icons/fi';

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
  // {
  //   period: '2018-2024',
  //   company: 'Insightlancer',
  //   position: 'Master in Visual Arts'
  // },
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

export default function Education() {
  return (
    <section id="education" className="section bg-muted">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-l-2 border-yellow pl-6 relative"
                >
                  <div className="absolute w-3 h-3 bg-yellow rounded-full -left-[7px] top-1"></div>
                  <span className="text-sm text-secondary">{item.period}</span>
                  <h4 className="heading text-xl mt-1">{item.degree}</h4>
                  <p className="text-secondary">{item.stream}</p>
                  <p className="text-secondary">{item.institution}</p>
                  <p className="text-secondary">{item.percentage}</p>
                </motion.div>
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-l-2 border-yellow pl-6 relative"
                >
                  <div className="absolute w-3 h-3 bg-yellow rounded-full -left-[7px] top-1"></div>
                  <span className="text-sm text-secondary">{item.period}</span>
                  <h4 className="heading text-xl mt-1">{item.company}</h4>
                  <p className="text-secondary">{item.position}</p>
                  <p className="text-secondary text-md md:text-base"><span className="font-bold">Tech Stack:</span> {item.techstack}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 