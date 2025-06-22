'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 bg-[#344eac]`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/next.svg"
                  alt="Clinic Plus Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="ml-2 text-xl font-semibold text-white">
                  Clinic Plus
                </span>
              </Link>
            </div>

            {/* Buttons Container */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Admin View Button */}
              <button className="px-6 py-2.5 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
                Admin View
              </button>
              
              {/* Book Appointment Button */}              <button 
                onClick={() => router.push('/pages/AppointmentForm')}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-medium hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 border border-white/30"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;