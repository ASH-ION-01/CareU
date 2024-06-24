import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white  py-8">
      <div className="container mx-auto px-8 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col mb-6 lg:mb-0 lg:mr-12">
            <p className="text-lg font-semibold mb-4">Contact Information</p>
            <div className="flex flex-col lg:flex-row">
              <div className="mb-4 lg:mb-0 lg:mr-8">
                <p className="text-sm">Creator: Ashion</p>
                <p className="text-sm">Email: ashishableo12@gmail.com</p>
              </div>
              <div className="flex items-center">
                <a href="mailto:ashishableo12@gmail.com" className="text-white hover:text-gray-300 mr-4">
                  <FaEnvelope />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 mr-4">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 mr-4">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className=" text-blue-200 hover:text-gray-300">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-semibold mb-4">Talk to Us / Query</p>
            <form>
              <textarea className="w-full text-blue-500 h-24 px-4 py-2 rounded-lg mb-4 focus:outline-none focus:ring focus:border-blue-500" placeholder="Type your message here..." />
              <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500">Send</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
