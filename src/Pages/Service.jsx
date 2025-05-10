
import React from 'react';
import { FaUser, FaStethoscope, FaAmbulance, FaShoppingCart, FaUserCog, FaHeartbeat } from 'react-icons/fa';

function Service() {
  return (
    <div className="container mx-auto w-screen py-12 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-white mb-8">Services</h2>
      
      {/* Feature: User registration and authentication */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ServiceCard icon={<FaUser />} title="User Registration and Authentication">
          Our platform provides a seamless user registration and authentication process, ensuring secure access to personalized healthcare services.
        </ServiceCard>

        {/* Feature: Symptom description form */}
        <ServiceCard icon={<FaStethoscope />} title="Symptom Description Form">
          Our platform includes a user-friendly symptom description form for basic medication suggestions, enabling users to describe their symptoms accurately.
        </ServiceCard>

        {/* Feature: Doctor search and appointment scheduling */}
        <ServiceCard icon={<FaUserCog />} title="Doctor Search and Appointment Scheduling">
          Our platform facilitates easy doctor search and appointment scheduling functionality, allowing users to find and book appointments with healthcare professionals.
        </ServiceCard>

        {/* Feature: Emergency call button */}
        <ServiceCard icon={<FaAmbulance />} title="Emergency Call Button">
          Our platform features an emergency call button for automatic ambulance dispatch, ensuring timely assistance during medical emergencies.
        </ServiceCard>

        {/* Feature: Secure online medicine purchase */}
        <ServiceCard icon={<FaShoppingCart />} title="Secure Online Medicine Purchase">
          Our platform ensures secure online medicine purchase with delivery tracking, providing users with convenient access to essential medications from trusted sources.
        </ServiceCard>

        {/* Feature: User profile management and medical history storage */}
        <ServiceCard icon={<FaUserCog />} title="User Profile Management and Medical History Storage">
          Our platform allows users to manage their profiles and store medical history securely, facilitating better healthcare management and personalized treatment.
        </ServiceCard>
      </div>
    </div>
  );
}

const ServiceCard = ({ icon, title, children }) => {
  return (
    <div className="flex flex-col bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 mr-4">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-500 transition duration-300">{title}</h3>
          <p className="text-gray-700 dark:text-gray-300 hover:text-gray-900 transition duration-300">
            {children}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="h-20 w-20 bg-blue-500 rounded-full flex justify-center items-center m-4 hover:bg-blue-600 transition duration-300">
          <FaHeartbeat className="text-white text-4xl" />
        </div>
        <div className="h-20 w-20 bg-blue-500 rounded-full flex justify-center items-center m-4 hover:bg-blue-600 transition duration-300">
          <FaHeartbeat className="text-white text-4xl" />
        </div>
        <div className="h-20 w-20 bg-blue-500 rounded-full flex justify-center items-center m-4 hover:bg-blue-600 transition duration-300">
          <FaHeartbeat className="text-white text-4xl" />
        </div>
        <div className="h-20 w-20 bg-blue-500 rounded-full flex justify-center items-center m-4 hover:bg-blue-600 transition duration-300">
          <FaHeartbeat className="text-white text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default Service;
