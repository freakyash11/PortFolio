'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiStar } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO at TechCorp',
    image: '/placeholder-avatar-1.jpg',
    quote: 'Working with Mark was an absolute pleasure. His attention to detail and creative approach resulted in a website that perfectly represents our brand. The design exceeded our expectations!',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Founder of StartupX',
    image: '/placeholder-avatar-2.jpg',
    quote: 'Mark delivered an exceptional UI/UX design for our mobile app. His understanding of user behavior and aesthetics created an intuitive and beautiful interface that our users love.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Marketing Director',
    image: '/placeholder-avatar-3.jpg',
    quote: 'The website Mark designed for us has significantly increased our conversion rates. His strategic approach to design focuses not just on looks but on results. Highly recommended!',
    rating: 5
  },
  {
    id: 4,
    name: 'David Thompson',
    position: 'Product Manager',
    image: '/placeholder-avatar-4.jpg',
    quote: 'We hired Mark to redesign our product interface, and the results were outstanding. He took the time to understand our users and created a design that is both beautiful and functional.',
    rating: 5
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [width, setWidth] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (slideRef.current) {
      setWidth(slideRef.current.scrollWidth - slideRef.current.offsetWidth);
    }
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center purple-bg text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>Testimonials</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading text-3xl md:text-4xl mb-6"
          >
            What Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-secondary text-lg"
          >
            Client satisfaction is my top priority. Here's what some of my clients have to say about 
            working together on their projects.
          </motion.p>
        </div>

        <div className="relative">
          <div 
            ref={slideRef}
            className="overflow-hidden relative mx-auto max-w-4xl"
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="min-w-full px-4"
                >
                  <div className="bg-background rounded-xl p-8 md:p-12 shadow-lg">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                      <div className="w-20 h-20 rounded-full purple-bg flex items-center justify-center text-primary text-2xl font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="heading text-xl mb-1">{testimonial.name}</h3>
                        <p className="text-secondary mb-3">{testimonial.position}</p>
                        <div className="flex items-center justify-center md:justify-start">
                          {[...Array(5)].map((_, i) => (
                            <FiStar 
                              key={i} 
                              className={`${i < testimonial.rating ? 'text-accent fill-accent' : 'text-secondary'} w-4 h-4 mr-1`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-secondary text-lg italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-10 gap-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <FiArrowLeft />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <FiArrowRight />
            </button>
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? 'bg-primary' : 'bg-secondary/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 