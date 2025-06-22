'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import AppointmentForm from './AppointmentForm';

const HeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Health, <br />
              <span className="text-blue-600">Our Priority</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Experience exceptional healthcare with our team of expert doctors. 
              Your well-being is at the heart of everything we do.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setIsFormOpen(true)}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
              >
                Book Appointment
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-all duration-200 font-medium">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl transform md:translate-x-8">
            {/* Replace the src with your actual image */}
            <div className="absolute inset-0 bg-blue-100 bg-opacity-50 backdrop-blur-sm"></div>
            <Image
              src="/doctor-hero.jpg"
              alt="Professional Doctor"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <AppointmentForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;