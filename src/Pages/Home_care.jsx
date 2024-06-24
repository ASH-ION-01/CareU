import React, { useState, useEffect } from 'react';
import remediesData from '../Data3';

const HomeCare = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Filter remedies based on search term
    const results = remediesData.filter(remedy =>
      remedy.disease.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Home Remedies for Health Problems</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for diseases..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <div>
        {searchResults.length > 0 ? (
          <ul className="list-disc ml-6">
            {searchResults.map((remedy, index) => (
              <li key={index} className="mb-4">
                <h3 className="text-xl font-semibold">{remedy.disease}</h3>
                <p className="text-gray-700">{remedy.remedy}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No remedies found for the entered disease.</p>
        )}
      </div>
    </div>
  );
};

export default HomeCare;

