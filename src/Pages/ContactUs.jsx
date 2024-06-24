import React, { useState } from 'react';


const App = () => {
  const [showCompanyDetails, setShowCompanyDetails] = useState(true);

  const companyDetails = {
    phone_number: '123-456-7890',
    email: 'example@example.com',
    address: '123 Main St',
    pincode: '12345',
    landline: '987-654-3210',
    contact_name: 'John Doe'
  };

  const [userName, setUserName] = useState('');
  const [problemType, setProblemType] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleProblemTypeChange = (event) => {
    setProblemType(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setProblemDescription(event.target.value);
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="container h-screen mx-auto p-4">
      <div className="flex justify-center mb-4">
        <button className={`mr-2 ${showCompanyDetails ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} py-2 px-4 rounded-lg`} onClick={() => setShowCompanyDetails(true)}>Query Form</button>
        <button className={`mr-2 ${!showCompanyDetails ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} py-2 px-4 rounded-lg`} onClick={() => setShowCompanyDetails(false)}>Company Details</button>
      </div>
      {showCompanyDetails ? 
        <div>
      <h2 className="text-xl font-bold mb-2">Query Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Your Name:</label>
          <input id="username" type="text" value={userName} onChange={handleUserNameChange} className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="problemType" className="block text-sm font-medium text-gray-700">Type of Problem:</label>
          <input id="problemType" type="text" value={problemType} onChange={handleProblemTypeChange} className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Problem Description:</label>
          <textarea id="description" rows="4" value={problemDescription} onChange={handleDescriptionChange} className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="proof" className="block text-sm font-medium text-gray-700">Proof Image:</label>
          <input id="proof" type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500" />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">Submit</button>
        </div>
      </form>
    </div>
       :

       <div>
            <h2 className="text-xl font-bold mb-2">Company Details</h2>
            <ul className="list-disc ml-6">
                {Object.entries(companyDetails).map(([key, value]) => (
                <li key={key}>
                    <strong>{key.replace('_', ' ').toUpperCase()}:</strong> {value}
                </li>
                ))}
            </ul>
        </div>

   
       }
    </div>
  );
};

export default App;


