"use client";

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import the Map component with no SSR
const PropertyMap = dynamic(() => import('@/components/maps/PropertyMap'), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] bg-gray-200 flex items-center justify-center">
      <div className="text-gray-500 text-xl">Loading Map...</div>
    </div>
  ),
});

const MapSection = () => {
  return (
    <section id="map" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore <span className="text-blue-600">Properties</span> on Map
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg">
            Find properties in your desired location with our interactive map. Filter by price, size, and amenities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative rounded-xl overflow-hidden shadow-2xl"
        >
          <PropertyMap />
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
