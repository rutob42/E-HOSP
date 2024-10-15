import React from 'react';
// Replace with your actual asset paths
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-4 md:px-8 lg:px-12'>
      {/* Left side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-6 md:py-[8vw]">
        <p className='text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight hover:text-shadow-glow'>
          Book Appointment <br /> With elite specialists
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img className='w-24' src={assets.group_profiles} alt="Group profiles" />
          <p className='hover:text-shadow-glow'>
            Simply browse through our extensive list of specialties, <br className='hidden sm:block'/> schedule an appointment
          </p>
        </div>
        <div className="book-button">
          <a href="#speciality" className='flex flex-center gap-2 bg-white px-8 py-3 rounded full text-gray-600 text-sm-auto md:m-0 hover:scale-105 transition-all duration-300'>
            Book Appointment <img className='w-3' src={assets.arrow_icon} alt="Arrow icon"  />
          </a>
        </div>
      </div>

      {/* Right side */}
      <div className="md:w-1/2 relative">
        <img className='w-full md:absolute bottom-0-auto rounded-lg' src={assets.header_img} alt="Header" />
      </div>
    </div>
  );
}

export default Header;
