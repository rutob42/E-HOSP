import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doctors } from '../assets/assets';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [speciality]);

  const handleSpecialityClick = (spec) => {
    if (spec === speciality) {
      navigate('/doctors/');
    } else {
      navigate(`/doctors/${spec}`);
    }
  };

  return (
    <div className="container mx-auto p-5">
      <p className='text-gray-700 text-lg mb-4'>Browse through the specialties:</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        {['General physician', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gynecologist'].map((spec) => (
          <div 
            key={spec} 
            onClick={() => handleSpecialityClick(spec)} 
            className={`w-full sm:w-auto pl-3 py-2 pr-4 border border-gray-300 rounded-lg shadow-md cursor-pointer hover:bg-blue-100 transition-all ${spec === speciality ? 'bg-blue-100' : ''}`}>
            {spec}
          </div>
        ))}
      </div>
      
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8'>
        {filterDoc.map((item) => (
          <div 
            key={item._id} 
            onClick={() => navigate(`/appointment/${item._id}`)}
            className='border  rounded-lg overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer'>
            <img className='w-full h-48 object-cover' src={item.image} alt={item.name} />
            <div className='p-4 bg-white'>
              <div className='flex items-center gap-2 text-sm text-blue-900'>
                <span className='w-3 h-3 bg-green-500 rounded-full'></span>
                <p className='text-green-600 font-medium'>Available</p>
              </div>
              <h2 className='text-gray-900 text-lg font-semibold mt-2'>{item.name}</h2>
              <p className='text-gray-600 text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;
