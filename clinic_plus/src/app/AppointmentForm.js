'use client';
import { useState } from 'react';
import { FaUserAlt, FaPhoneAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { BsGenderAmbiguous } from 'react-icons/bs';
import { MdOutlineTipsAndUpdates } from 'react-icons/md';

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">Book Your Appointment</h2>
            <p className="text-gray-600 mt-2">Fill in your details to schedule a consultation</p>
          </div>

          {/* Tips Box */}
          <div className="bg-[#F0F8FF] border border-[#B3D9FF] rounded-xl p-4 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <MdOutlineTipsAndUpdates className="text-blue-500 text-xl" />
              <h3 className="font-semibold text-gray-800">Before You Book</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Arrive 10 minutes before your scheduled time</li>
              <li>✓ Bring valid ID and insurance cards</li>
              <li>✓ Have your medical history ready</li>
              <li>✓ Wear a mask during your visit</li>
            </ul>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUserAlt className="text-gray-400" />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              {/* Age Input */}
              <div className="relative">
                <input
                  type="number"
                  required
                  placeholder="Age"
                  min="0"
                  max="120"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                />
              </div>

              {/* Gender Select */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <BsGenderAmbiguous className="text-gray-400" />
                </div>
                <select
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  value={formData.gender}
                  onChange={(e) => setFormData({...formData, gender: e.target.value})}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Phone Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhoneAlt className="text-gray-400" />
                </div>
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              {/* Date Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCalendarAlt className="text-gray-400" />
                </div>
                <input
                  type="date"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>

              {/* Time Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaClock className="text-gray-400" />
                </div>
                <input
                  type="time"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
              >
                Confirm Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;