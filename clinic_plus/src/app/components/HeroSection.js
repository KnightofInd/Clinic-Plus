'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const router = useRouter();

  return (
    <section className="pt-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-20">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
              Your Health,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Our Priority
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
              Experience exceptional healthcare with our dedicated team of professionals.
              Your well-being is at the heart of everything we do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => router.push('/pages/AppointmentForm')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Book Appointment
              </button>
              <button className="px-8 py-4 rounded-full border-2 border-blue-500 text-blue-500 font-medium hover:bg-blue-50 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative h-[400px] lg:h-[600px] w-full">
              <Image
                src="/doctor-hero.jpg"
                alt="Professional Doctor"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;