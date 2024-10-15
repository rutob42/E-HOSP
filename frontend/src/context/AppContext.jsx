import { createContext, useState } from 'react';
import { doctors } from '../assets/assets'; // Ensure doctors is correctly imported

// Create the context
export const AppContext = createContext();

// Create the provider component
const AppContextProvider = ({ children }) => {
  const [doctorData, setDoctorData] = useState(doctors);

  return (
    <AppContext.Provider value={{ doctors: doctorData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
