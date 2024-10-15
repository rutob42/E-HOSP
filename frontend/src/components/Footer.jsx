import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-5'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-30 text-sm'>
        {/* left section */}
        <div>
            <img className='sm-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-800 leading-6'>Your trusted partner in health and wellness. We are dedicated to providing you with the best services and support.
  Our mission is to empower individuals to lead healthier lives through accessible and innovative healthcare solutions. 
  </p>
        </div>

        {/* center section */}
        <div>
            <p className='text-xl font-medium mb-4'>COMPANY</p>
            <ul className='flex flex-col gap-2  text-gray-800'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        {/* right side */}
      <div>
        <p className='text-xl font-medium mb-5'>Get in touch</p>
        <ul className='flex flex-col gap-2  text-gray-800'>
            <li>+2549999999</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Footer
