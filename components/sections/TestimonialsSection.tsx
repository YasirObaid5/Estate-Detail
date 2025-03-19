"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerChildren, TextReveal } from '@/components/animations/AnimationComponents';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Home Seller",
      quote: "The real estate detailing service transformed my property. We received multiple offers within the first week, all above asking price!",
      initials: "SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Property Developer",
      quote: "Their attention to detail and professional photography made our properties stand out in a competitive market. Highly recommended!",
      initials: "MC"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Real Estate Agent",
      quote: "I've worked with many detailing services, but none compare to the quality and professionalism I've experienced with this team.",
      initials: "ER"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client <span className="text-blue-600">Testimonials</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Hear what our clients have to say about our real estate detailing services.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.initials}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <TextReveal text={testimonial.quote} className="text-gray-700 italic" />
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.4} className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
          >
            View All Testimonials
          </motion.button>
        </FadeIn>
      </div>
    </section>
  );
};

export default TestimonialsSection;
