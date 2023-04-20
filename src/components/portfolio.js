import React from 'react';
import Navbar from './Navbar';
import HeroSection from './Hero';
import AboutSection from './About';
import ServicesSection from './Services';
import SkillsSection from './Skill';
import ContactSection from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Portfolio;
