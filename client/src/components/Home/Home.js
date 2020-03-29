import React from 'react';
import './Home.scss';
const Home = ({ isCurrentPage }) => {
  return (
    <div className='homepage'>
      <div className='homepage-info'>
        <div
          className={`homepage-pagetitle ${isCurrentPage &&
            'pagetitle-active'}`}
        >
          HOME
        </div>
        <div className='homepage-info-inner'>
          check out this sick box check out this sick box check out this sick
          box check out this sick box check out this sick box check out this
          sick box check out this sick box check out this sick box check out
          this sick box check out this sick box check out this sick box check
          out this sick box check out this sick box check out this sick box
          check out this sick box check out this sick box check out this sick
          box check out this sick box check out this sick box check out this
          sick box check out this sick box check out this sick box
        </div>
      </div>
    </div>
  );
};

export default Home;
