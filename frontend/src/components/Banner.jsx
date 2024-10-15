import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className='flex bg-primary rounded-lg  px-3 sm:px-9 lg:px-7 my-7 md:mx-7'>
      {/* Left side */}
      <div className='flex-1 py-8 sm:py-7 lg:py-10 lg:pl-5'>
        <div className='text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight'>
          <p>Book Your Appointment</p>
          <p className='mt-4'>With Trusted Doctors</p>
        </div>
        <p className='text-sm sm:text-base text-gray-200 mt-4 sm:mt-6 lg:mt-8'>
          Access highly qualified medical professionals at your convenience.
        </p>
        <button 
          onClick={() => { navigate('/login'); window.scrollTo(0, 0); }} 
          className='bg-white text-sm sm:text-base text-gray-800 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-transform shadow-md hover:shadow-lg'
        >
          CREATE ACCOUNT
        </button>
      </div>

      {/* Right side (Image) */}
      <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
        <img 
          className='w-full absolute bottom-0 right-0 max-w-xs lg:max-w-md object-contain' 
          src={assets.appointment_img} 
          alt="Doctor appointment illustration" 
        />
      </div>
    </div>
  );
};

export default Banner;
