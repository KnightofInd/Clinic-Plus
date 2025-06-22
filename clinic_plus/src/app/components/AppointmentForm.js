'use client';
import { useState } from 'react';
import { FaUser, FaPhone, FaCalendarAlt, FaClock, FaInfoCircle } from 'react-icons/fa';

const AppointmentForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    phone: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    onClose();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Book Your Appointment
        </h2>

        {/* Tips Box */}
        <div className="bg-[#F0F8FF] border border-[#B3D9FF] rounded-xl p-4 mb-6">
          <h3 className="font-semibold text-gray-700 flex items-center gap-2 mb-3">
            <FaInfoCircle className="text-blue-500" />
            Before You Book
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <span className="text-blue-500">•</span>
              Arrive 10 minutes before your appointment
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500">•</span>
              Bring valid ID and insurance information
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500">•</span>
              Wear a mask during your visit
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500">•</span>
              Cancel at least 24 hours in advance if needed
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-4">
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="number"
                name="age"
                placeholder="Age"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                onChange={handleChange}
              />

              <select
                name="gender"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="relative">
              <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                  onChange={handleChange}
                />
              </div>

              <div className="relative">
                <FaClock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="time"
                  name="time"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg 
            hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg 
            hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;