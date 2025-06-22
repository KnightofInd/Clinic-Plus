'use client';
import React, { useState } from 'react';

const QA = () => {
  const faqs = [
    {
      question: "What insurance plans do you accept?",
      answer: "We accept most major insurance plans including Medicare, Blue Cross Blue Shield, Aetna, and United Healthcare. Please contact our office for a complete list of accepted insurance providers."
    },
    {
      question: "What are your office hours?",
      answer: "Our office is open Monday through Friday from 8:00 AM to 6:00 PM. We also offer extended hours on Saturdays from 9:00 AM to 1:00 PM for urgent care needs."
    },
    {
      question: "How do I schedule an appointment?",
      answer: "You can schedule an appointment by calling our office during business hours, using our online booking system, or through our patient portal. New patients are always welcome."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring your photo ID, insurance card, list of current medications, and any relevant medical records or test results. Arrive 15 minutes early to complete necessary paperwork."
    },
    {
      question: "Do you offer telehealth services?",
      answer: "Yes, we offer secure video consultations for eligible appointments. You can book a telehealth visit through our patient portal or by calling our office."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Find answers to common questions about our services and procedures
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-900">{question}</span>
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronIcon />
        </span>
      </button>
      
      <div 
        className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'py-4 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const ChevronIcon = () => (
  <svg
    className="w-5 h-5 text-gray-500"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M19 9l-7 7-7-7"></path>
  </svg>
);

export default QA;