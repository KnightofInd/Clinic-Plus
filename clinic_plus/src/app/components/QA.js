'use client';
import { useState } from 'react';

const QA = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What insurance plans do you accept?',
      answer: 'We accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, and Medicare. Please contact our office to verify your specific insurance coverage.'
    },
    {
      question: 'What are your clinic hours?',
      answer: 'Our clinic is open Monday through Friday from 8:00 AM to 6:00 PM. We also offer extended hours on Saturdays from 9:00 AM to 1:00 PM for urgent care needs.'
    },
    {
      question: 'How do I schedule an appointment?',
      answer: 'You can schedule an appointment by calling our office, using our online booking system, or through our mobile app. We try to accommodate same-day appointments for urgent cases.'
    },
    {
      question: 'What should I bring to my first appointment?',
      answer: 'Please bring your ID, insurance card, list of current medications, medical history records, and any relevant test results or imaging from previous healthcare providers.'
    },
    {
      question: 'Do you offer telemedicine consultations?',
      answer: 'Yes, we offer secure video consultations for follow-up appointments and minor health concerns. You can book a telemedicine appointment through our website or mobile app.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our services and procedures
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-40 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QA;