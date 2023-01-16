import React from "react";
import "./style.css";

// files
import EmloyeeList from './components/EmployeeList';
import EmployeeContextProvider from './context/EmployeeContext';


export default function App() {
  return (
    <div className='container-xl'>
      <div className='table-responsive'>
        <div className='table-wrapper'>
          <EmployeeContextProvider>
              <EmloyeeList />
          </EmployeeContextProvider>
        </div>
      </div>    
    </div>
  );
}

// https://symphonious-scone-76d32e.netlify.app/#

