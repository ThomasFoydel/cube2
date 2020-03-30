import React from 'react';
import './Register.scss';
const Register = ({ isCurrentPage }) => {
  return (
    <div>
      <div className='registerpage'>
        <div className='box1'>
          <h1
            className={`cubeside-pagetitle ${isCurrentPage &&
              'pagetitle-active'}`}
          >
            Register
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
