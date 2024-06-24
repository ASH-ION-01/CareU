import React from 'react';

function AboutUs() {
  return (
    <div className='flex flex-col w-full w-screen mx-auto'>
      <div className='flex flex-row justify-evenly items-center border-b-2 pb-4 transition duration-300 ease-in-out hover:bg-purple-100 hover:shadow-lg'>
        <div className='flex justify-center items-center'>
          <img src='/img_assests/Sign-up-image.png' className='w-[30%] rounded-full' alt='Profile' />
        </div>

        <div>
          <h1 className='text-2xl font-bold text-gray-800'>Mr. Ashish Kumar</h1>
          <p className='text-sm text-gray-600'>Frontend Developer</p>
          <div className='flex flex-row items-center mt-2'>
            <p className='text-sm font-semibold mr-2'>Skills:</p>
            <span className='text-sm text-gray-600'>Icons to be presented here!</span>
          </div>
          <div className='text-sm text-gray-600 mt-2'>If want to add more content</div>
        </div>
      </div>

      <div className='flex flex-row justify-evenly items-center border-b-2 pb-4 transition duration-300 ease-in-out hover:bg-purple-100 hover:shadow-lg'>
        <div>
          <h1 className='text-2xl font-bold text-gray-800'>Mr. Deepak Das</h1>
          <p className='text-sm text-gray-600'>Frontend Developer</p>
          <div className='flex flex-row items-center mt-2'>
            <p className='text-sm font-semibold mr-2'>Skills:</p>
            <span className='text-sm text-gray-600'>Icons to be presented here!</span>
          </div>
          <div className='text-sm text-gray-600 mt-2'>If want to add more content</div>
        </div>
        
        <div className='flex justify-center items-center'>
          <img src='/img_assests/Sign-up-image.png' className='w-[30%] rounded-full' alt='Profile' />
        </div>
      </div>

      <div className='flex flex-row justify-evenly items-center border-b-2 pb-4 transition duration-300 ease-in-out hover:bg-purple-100 hover:shadow-lg'>
        <div className='flex justify-center items-center'>
          <img src='/img_assests/Sign-up-image.png' className='w-[30%] rounded-full' alt='Profile' />
        </div>

        <div>
          <h1 className='text-2xl font-bold text-gray-800'>Mr. Shivam</h1>
          <p className='text-sm text-gray-600'>Backend Developer</p>
          <div className='flex flex-row items-center mt-2'>
            <p className='text-sm font-semibold mr-2'>Skills:</p>
            <span className='text-sm text-gray-600'>Icons to be presented here!</span>
          </div>
          <div className='text-sm text-gray-600 mt-2'>If want to add more content</div>
        </div>
      </div>

      <div className='flex flex-row justify-evenly items-center border-b-2 pb-4 transition duration-300 ease-in-out hover:bg-purple-100 hover:shadow-lg'>
        <div>
          <h1 className='text-2xl font-bold text-gray-800'>Mr. Avneesh Kuamr Pathak</h1>
          <p className='text-sm text-gray-600'>Backend Developer</p>
          <div className='flex flex-row items-center mt-2'>
            <p className='text-sm font-semibold mr-2'>Skills:</p>
            <span className='text-sm text-gray-600'>Icons to be presented here!</span>
          </div>
          <div className='text-sm text-gray-600 mt-2'>If want to add more content</div>
        </div>
        
        <div className='flex justify-center items-center'>
          <img src='/img_assests/Sign-up-image.png' className='w-[30%] rounded-full' alt='Profile' />
        </div>
      </div>
      {/* Repeat the structure for other team members */}
    </div>
  );
}

export default AboutUs;
