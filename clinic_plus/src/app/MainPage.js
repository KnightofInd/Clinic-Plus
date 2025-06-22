import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import QA from './components/QA';
import Footer from './components/Footer';

const MainPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <QA />
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;