"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerChildren, HoverAnimation } from '@/components/animations/AnimationComponents';

const PropertyListingSection = () => {
  const properties = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      location: "Beverly Hills, CA",
      price: "$2,450,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "4,200 sq ft",
      featured: true,
    },
    {
      id: 2,
      title: "Downtown Penthouse",
      location: "New York, NY",
      price: "$1,850,000",
      bedrooms: 3,
      bathrooms: 3,
      area: "2,800 sq ft",
      featured: false,
    },
    {
      id: 3,
      title: "Seaside Retreat",
      location: "Malibu, CA",
      price: "$3,200,000",
      bedrooms: 4,
      bathrooms: 5,
      area: "3,600 sq ft",
      featured: true,
    },
    {
      id: 4,
      title: "Mountain View Cabin",
      location: "Aspen, CO",
      price: "$1,200,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "2,100 sq ft",
      featured: false,
    },
    {
      id: 5,
      title: "Lakefront Property",
      location: "Chicago, IL",
      price: "$1,750,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "3,200 sq ft",
      featured: true,
    },
    {
      id: 6,
      title: "Historic Brownstone",
      location: "Boston, MA",
      price: "$1,950,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "3,400 sq ft",
      featured: false,
    }
  ];

  return (
    <section id="properties" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-blue-600">Properties</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Discover our selection of meticulously detailed properties ready for your consideration.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <HoverAnimation key={property.id} scale={1.03} shadow={true}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md h-full flex flex-col">
                <div 
                  className="h-56 bg-gradient-to-r from-blue-400 to-indigo-500 relative"
                  style={{
                    backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00TTIwIDM0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0xNi0xNmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNCIvPjwvZz48L2c+PC9zdmc+')`
                  }}
                >
                  {property.featured && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{property.title}</h3>
                    <span className="text-blue-600 font-bold">{property.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {property.location}
                  </p>
                  <div className="flex justify-between text-gray-600 border-t border-gray-100 pt-4">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>{property.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{property.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                      </svg>
                      <span>{property.area}</span>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </HoverAnimation>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.4} className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            View All Properties
          </motion.button>
        </FadeIn>
      </div>
    </section>
  );
};

export default PropertyListingSection;
