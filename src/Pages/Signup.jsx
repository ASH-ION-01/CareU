
import React, { useState } from 'react';
import { NavLink} from 'react-router-dom'

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full space-y-8 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="py-8 px-6">
          <h2 className="mt-6 text-center text-5xl font-extrabold text-gray-900">Create an account</h2>
        </div>
        <div className="relative">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="/img_assests/Sign-up-image.png"
            alt="Signup Image"
          />
          <div className="relative bg-white bg-opacity-50 p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="full-name" className="sr-only">Full Name</label>
                <input
                  id="full-name"
                  name="full-name"
                  type="text"
                  autoComplete="full-name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm hover:shadow-2xl"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none hover:shadow-2xl rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none hover:shadow-2xl rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className=" hover:shadow-2xl rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
              <div>
              <NavLink to='/Login'>
                <a href="#_" class="relative inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span class="absolute left-0 w-full h-full bg-indigo-600 opacity-0 group-hover:opacity-100 transition duration-400 ease-in-out"></span>
                  <button type='submit' class="relative z-10">Sign up</button>
                </a>
              </NavLink>
                

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

