'use client';

import { motion } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiCloud } from 'react-icons/fi';

const services = [
  {
    icon: <FiServer className="text-2xl" />,
    title: 'AI-Powered Web Applications',
    description: 'Integrate AI tools to enhance user interaction and automation.',
    colorClass: 'bg-purple-gradient'
  },
  {
    icon: <FiCode className="text-2xl" />,
    title: 'Web Development',
    description: 'Building responsive and performant websites using modern technologies and best practices.',
    colorClass: 'bg-green-gradient'
  },
  {
    icon: <FiDatabase className="text-2xl" />,
    title: 'Database Design and Integration',
    description: 'Design efficient, scalable database structures and integrate them seamlessly with your applications.',
    colorClass: 'bg-yellow-gradient'
  },
  {
    icon: <FiCloud className="text-2xl" />,
    title: 'Deployment and Hosting',
    description: 'Deploy fast and reliable web applications with smooth CI/CD setup, domain configuration, and performance optimization',
    colorClass: 'bg-orange-gradient'
  },
];

export default function About() {
  return (
    <section id="about" className="section bg-muted">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center bg-yellow-light text-yellow px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>About me</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading text-3xl md:text-4xl mb-6"
          >
            Passionate Full-Stack Developer crafting fast, responsive, and intuitive web experiences
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-secondary text-lg"
          >
            I aim to leverage my expertise in modern frameworks such as Next.js,
 React.js, and Node.js, along with robust experience in MongoDB and web technologies, to deliver scalable and impactful online
 experiences
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden bg-green-light bg-opacity-30">
              <div className="aspect-[4/3] w-full h-full flex items-center justify-center p-8">
                <div className="w-full h-full rounded-lg bg-green-gradient flex items-center justify-center overflow-hidden">
                  <img 
                    src="/coding-man.png" 
                    alt="Coding illustration"
                    className="w-auto h-auto max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-yellow-light z-[-1]"></div>
            <div className="absolute top-1/3 -left-5 w-10 h-10 rounded-full bg-yellow"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="heading text-2xl mb-6">
            Driven by a passion for innovative <span className="bg-green-gradient gradient-text"> web development</span> , I am a B.Tech student specializing in Electronics and Communication
            Engineering with hands-on internship and project experience
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-xl mb-2">500+</h4>
                  <p className="text-secondary">DSA Questions Solved</p>
                </div>
                <div>
                  <h4 className="font-medium text-xl mb-2">30+</h4>
                  <p className="text-secondary">Completed Projects</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-xl mb-2">3 Years</h4>
                  <p className="text-secondary">Experience</p>
                </div>
                <div>
                  <h4 className="font-medium text-xl mb-2">12+</h4>
                  <p className="text-secondary">Achievement</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-green-light text-green rounded-full text-sm font-medium">
              Web Development
              </span>
              <span className="px-4 py-2 bg-yellow-light text-yellow rounded-full text-sm font-medium">
              Backend Development
              </span>
              <span className="px-4 py-2 purple-bg text-primary rounded-full text-sm font-medium">
              Responsive Design
              </span>
              <span className="px-4 py-2 orange-bg text-accent rounded-full text-sm font-medium">
              Git
              </span>
              <span className="px-4 py-2 bg-green-light text-green rounded-full text-sm font-medium">
              Adaptability
              </span>
            </div>
          </motion.div>
        </div>

        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading text-2xl text-center mb-12"
          >
            Services I Offer
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card-bg p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white mb-4 ${service.colorClass}`}>
                  {service.icon}
                </div>
                <h4 className="heading text-xl mb-2">{service.title}</h4>
                <p className="text-secondary">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 