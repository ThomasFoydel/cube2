import React, { useContext } from 'react';
import { GlobalContext } from 'context/GlobalContext';
import './PageRotation.scss';
import rotate from 'sounds/glitch6.mp3';
import fail from 'sounds/glitch4.mp3';

const PageRotation = () => {
  const { changeRotation, currentPage, changeCurrentPage } = useContext(
    GlobalContext
  );

  const rotateSound = new Audio();
  rotateSound.src = rotate;

  const failSound = new Audio();
  failSound.src = fail;

  const handleRotate = (rotation, pageName) => {
    if (currentPage === pageName) {
      failSound.play();
    } else {
      changeCurrentPage(pageName);
      changeRotation(rotation);
      rotateSound.play();
    }
  };
  return (
    <div className='pagerotation'>
      <div
        className={`pagerotation-option ${currentPage === 'home' && 'active'}`}
        onClick={() => {
          handleRotate(`rotate3d(0, 100, 0, 270deg)`, 'home');
        }}
      >
        home
      </div>
      <div
        className={`pagerotation-option ${currentPage === 'about' && 'active'}`}
        onClick={() => {
          handleRotate(`rotate3d(0, 100, 0, 180deg)`, 'about');
        }}
      >
        about
      </div>
      <div
        className={`pagerotation-option ${currentPage === 'contact' &&
          'active'}`}
        onClick={() => {
          handleRotate(`rotate3d(0, 100, 0, 90deg)`, 'contact');
        }}
      >
        contact
      </div>
      <div
        className={`pagerotation-option ${currentPage === 'products' &&
          'active'}`}
        onClick={() => {
          handleRotate(`rotate3d(0, 100, 0, 0deg)`, 'products');
        }}
      >
        products
      </div>
      <div
        className={`pagerotation-option ${currentPage === 'login' && 'active'}`}
        onClick={() => {
          handleRotate(`rotate3d(0, 100, 100, 180deg)`, 'login');
        }}
      >
        login
      </div>
      <div
        className={`pagerotation-option ${currentPage === 'register' &&
          'active'}`}
        onClick={() => {
          handleRotate(`rotate3d(100, 0, 0, 270deg)`, 'register');
        }}
      >
        register
      </div>
    </div>
  );
};

export default PageRotation;
