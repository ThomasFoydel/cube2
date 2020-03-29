import React from 'react';
import './Contact.scss';
const Contact = ({ isCurrentPage }) => {
  return (
    <div className='contactpage'>
      <div className='box1'>
        <h1
          className={`cubeside-pagetitle ${isCurrentPage &&
            'pagetitle-active'}`}
        >
          contact
        </h1>
      </div>
    </div>
  );
};

export default Contact;
