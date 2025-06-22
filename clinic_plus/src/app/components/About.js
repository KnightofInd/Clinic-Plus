'use client';
import React from 'react';
import Image from 'next/image';

const About = () => {
  const achievements = [
    {
      title: '20+ Years Experience',
      description: 'Providing exceptional healthcare services since 2003'
    },
    {
      title: 'Board Certified',
      description: 'American Board of Medical Specialties certified physician'
    },
    {
      title: 'Advanced Technology',
      description: 'State-of-the-art medical equipment and facilities'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Doctor Image */}
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden shadow-xl max-w-md mx-auto">
              {/* Replace with actual doctor image */}
              <div className="absolute inset-0 bg-blue-100"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Dr. Sarah Johnson
              </h2>
              <p className="text-gray-600 leading-relaxed">
                With over two decades of experience in family medicine, Dr. Johnson 
                has dedicated her career to providing comprehensive healthcare for 
                patients of all ages. Her approach combines evidence-based medicine 
                with compassionate care.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
                >
                  <h3 className="font-semibold text-lg text-blue-600 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>

            <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200">
              Read More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;