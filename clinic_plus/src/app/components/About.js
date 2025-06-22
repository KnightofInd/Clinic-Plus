'use client';
import Image from 'next/image';

const About = () => {
  const achievements = [
    {
      title: '20+ Years Experience',
      description: 'Serving patients with dedication and expertise'
    },
    {
      title: 'Board Certified',
      description: 'American Board of Internal Medicine'
    },
    {
      title: 'Research Publications',
      description: '50+ papers in renowned medical journals'
    },
    {
      title: 'Patient Satisfaction',
      description: '98% positive patient feedback'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left - Doctor's Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full"></div>
              <div className="absolute inset-4">
                <Image
                  src="/doctor-profile.jpg"
                  alt="Dr. Smith"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Dr. Sarah Smith
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over two decades of experience in internal medicine, Dr. Smith has 
                dedicated her career to providing comprehensive, patient-centered care. 
                Her approach combines cutting-edge medical expertise with compassionate 
                understanding of each patient's unique needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center gap-2">
              Read Full Bio
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;