"use client";

import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MapSection from '@/components/sections/MapSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PropertyListingSection from '@/components/sections/PropertyListingSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import { ScrollProgress } from '@/components/animations/AnimationComponents';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PropertyListingSection />
      <MapSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
