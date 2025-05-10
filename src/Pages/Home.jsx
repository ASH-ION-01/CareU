import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Home.css';

function Home() {
  return (
    <div className='flex'>
      {/* Hero-section */}
      <section className='flex gap-y-2 justify-center relative'>
        {/* Background image */}
        <div className='absolute inset-0 bg-cover bg-center z-0' style={{ backgroundImage: `url('/9523314.jpg')` }}></div>

        {/* Content */}
        <div className='flex w-screen h-screen relative z-10'>
          {/* left */}
          <div className='w-screen pb-64 flex flex-col justify-center items-center'>
            <div>
              <h1 className="text-5xl font-extrabold text-blue-900 text-center">Welcome to Medicare.</h1>
              <p className="text-4xl  text-rose-500 font-bold text-center">Get it fixed.</p>
              <p className="text-5xl font-bold text-blue-700 mb-4 text-center">Get on with your life.</p>
              <p className="text-xl font-mono text-shadow-2xl text-center text-gray-800">"Wherever the art of medicine is loved, there is also a love for humanity"</p>
            </div>

            <div className='flex flex-row justify-around gap-x-8 pt-4'>
              <NavLink to="/Prescription" className="transform transition duration-300 hover:scale-110">
                <div className="bg-blue-100 rounded-md p-3 shadow-md hover:shadow-lg">
                  <p className="text-blue-500 text-lg font-semibold hover:text-blue-700">Describe Your Situation</p>
                </div>
              </NavLink>
              <NavLink to="/Shopping" className="transform transition duration-300 hover:scale-110">
                <div className="bg-blue-100 rounded-md p-3 shadow-md hover:shadow-lg">
                  <p className="text-blue-500 text-lg font-semibold hover:text-blue-700">Medic Online</p>
                </div>
              </NavLink>
            </div>

            <div className="mt-4">
              <NavLink to='/Emergency'>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                  Emergency
                </button>
              </NavLink>
            </div>


          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
