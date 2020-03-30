import React from 'react';
import './Login.scss';
const Login = ({ isCurrentPage }) => {
  return (
    <div>
      <div className='loginpage'>
        <div className='box1'>
          <h1
            className={`cubeside-pagetitle ${isCurrentPage &&
              'pagetitle-active'}`}
          >
            Login
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
