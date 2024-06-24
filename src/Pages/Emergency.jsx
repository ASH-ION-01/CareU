import React from 'react';

function Emergency() {
  return (
    <div className="min-h-screen w-full bg-red-100 flex flex-col justify-center items-center p-4">
      <header className="w-full text-center mb-8">
        <h1 className="text-4xl font-bold text-red-600">Emergency Health Services</h1>
        <p className="text-lg text-red-500">Providing urgent medical care when you need it the most</p>
      </header>
      
      <main className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">Immediate Assistance Required?</h2>
        <p className="text-gray-700 mb-4">If you are experiencing a medical emergency, call 911 immediately. For other urgent health concerns, please fill out the form below, and our team will get back to you promptly.</p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full mt-1 p-2 border border-gray-300 rounded-md" placeholder="Your Name" />
          </div>
          
          <div>
            <label className="block text-gray-700">Phone</label>
            <input type="tel" className="w-full mt-1 p-2 border border-gray-300 rounded-md" placeholder="Your Phone Number" />
          </div>
          
          <div>
            <label className="block text-gray-700">Describe Your Emergency</label>
            <textarea className="w-full mt-1 p-2 border border-gray-300 rounded-md" placeholder="Describe the nature of your emergency" rows="4"></textarea>
          </div>
          
          <button type="submit" className="w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-700">Submit</button>
        </form>
      </main>
      
      <footer className="w-full text-center mt-8">
        <p className="text-gray-700">&copy; 2024 Emergency Health Services. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Emergency;
