import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {

  const navigate = useNavigate()
  const {doctors} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center gap-8 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-4xl font-bold text-blue-900'>Top Doctors to Book</h1>
      <p className='sm:w-1/2 text-center text-lg text-gray-600'>
        Browse through our trusted list of specialists and book an appointment with ease.
      </p>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 px-4 sm:px-0'>
        {doctors.slice(0, 10).map((item, index) => (
          <div 
            key={index} onClick={()=>navigate(`/appointment/${item._id}`)}
            className='border border-blue-00 rounded-lg overflow-hidden shadow-lg hover:shadow-5xl transition-transform transform hover:-translate-y-5 cursor-pointer'>
            <img className='w-full h-63 object-cover bg-white-500' src={item.image} alt={item.name} />
            
            <div className='p-5 bg-white'>
              <div className='flex items-center gap-2 text-sm text-blue-900'>
                <span className='w-3 h-3 bg-green-500 rounded-full'></span>
                <p className='text-green-600 font-medium'>Available</p>
              </div>
              <h2 className='text-gray-900 text-lg font-medium'>{item.name}</h2>
              <p className='text-gray-600 text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='mt-8 px-6 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-primary transition-colors'>
        View More
      </button>
    </div>
  );
};

export default TopDoctors;
