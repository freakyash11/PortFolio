'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiX } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    try {
      // Format the message with proper line breaks and spacing
      const formattedMessage = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
      `.trim();

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_name: 'Biyash',
        to_email: 'kuwarbiyash@gmail.com',
        subject: formData.subject,
        message: formattedMessage,
      };

      console.log('Sending email with params:', templateParams); // For debugging

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto-clear success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      
      // Auto-clear error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-muted">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center purple-bg text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>Get In Touch</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading text-3xl md:text-4xl mb-6"
          >
            Let&apos;s Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-secondary text-lg"
          >
            Have a project in mind or want to say hello? Feel free to reach out. 
            I&apos;d love to hear from you and discuss how we can work together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="heading text-2xl mb-6">Contact Information</h3>
              <p className="text-secondary mb-8">
                Fill up the form and I&apos;ll get back to you as soon as possible.
                Let&apos;s create something amazing together!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 purple-bg rounded-lg flex items-center justify-center text-primary text-xl">
                    <FiMail />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto: kuwarbiyash@gmail.com" className="text-secondary hover:text-primary transition-colors">
                      kuwarbiyash@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 purple-bg rounded-lg flex items-center justify-center text-primary text-xl">
                    <FiPhone />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a href="tel:+917669567755" className="text-secondary hover:text-primary transition-colors">
                      +91 7669567755
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 purple-bg rounded-lg flex items-center justify-center text-primary text-xl">
                    <FiMapPin />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-secondary">
                      San Francisco, California
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-background rounded-xl p-8 shadow-lg">
              <h3 className="heading text-2xl mb-6">Send a Message</h3>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center text-green-700">
                  <FiCheck className="mr-2" />
                  <span>Thank you for your message! I will get back to you soon.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg flex items-center text-red-700">
                  <FiX className="mr-2" />
                  <span>Failed to send message. Please try again later.</span>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-border rounded-lg bg-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-border rounded-lg bg-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-border rounded-lg bg-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-border rounded-lg bg-muted focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Hello, I'm interested in..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`btn btn-primary w-full md:w-auto flex items-center justify-center ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>Processing... <span className="ml-2 animate-spin">↻</span></>
                ) : (
                  <>Send Message <FiSend className="ml-2" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}