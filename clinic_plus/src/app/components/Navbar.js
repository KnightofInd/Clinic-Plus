'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppointmentForm from './AppointmentForm';

const Navbar = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm backdrop-blur-sm bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {/* Replace with your actual logo */}
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              <span className="text-xl font-semibold text-gray-800">ClinicPlus</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/" text="Home" />
            <NavLink href="#about" text="About" />
            <NavLink href="#faq" text="FAQ" />
            <NavLink href="#contact" text="Contact" />
          </div>

          {/* Book Appointment Button */}
          
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, text }) => (
  <Link
    href={href}
    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
  >
    {text}
  </Link>
);

export default Navbar;