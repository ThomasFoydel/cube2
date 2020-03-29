import React from 'react';
import './About.scss';

const About = ({ isCurrentPage }) => {
  return (
    <div className='aboutpage'>
      <div className='box1'>
        <h1
          className={`cubeside-pagetitle ${isCurrentPage &&
            'pagetitle-active'}`}
        >
          About
        </h1>
      </div>
    </div>
  );
};

export default About;
