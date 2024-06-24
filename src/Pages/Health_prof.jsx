import React from 'react';

function Health_prof({ healthProfessionalsData }) {
  return (
    <div className="bg-cyan-100 py-12 w-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-cyan-800 mb-8">Meet Our Health Professionals</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {healthProfessionalsData.map((professional, index) => (
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:ring-cyan-300 hover:transform hover:scale-105 transition duration-300 ease-in-out hover:bg-cyan-200" key={index}>
              <img className="w-full h-64 object-cover" src={professional.image} alt={professional.name} />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-cyan-800 mb-2">{professional.name}</h2>
                <p className="text-sm text-gray-600 mb-1"><strong>Expertise:</strong> {professional.expertise}</p>
                <p className="text-sm text-gray-600 mb-1"><strong>Education:</strong> {professional.education}</p>
                <p className="text-sm text-gray-600 mb-4"><strong>Specialization:</strong> {professional.specialization}</p>
                <a href="#" className="text-cyan-800 hover:underline">Know More..</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Health_prof;
