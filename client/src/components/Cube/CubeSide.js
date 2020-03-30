import React, { useContext, useState } from 'react';
import PageRotation from 'components/Controls/PageRotation';
import { GlobalContext } from 'context/GlobalContext';
import Home from 'components/Home/Home';
import About from 'components/About/About';
import Contact from 'components/Contact/Contact';
import Products from 'components/Products/Products';
import Login from 'components/Login/Login';
import Register from 'components/Register/Register';

const CubeSide = ({ children, side, pageTitle }) => {
  const { currentPage } = useContext(GlobalContext);

  let isCurrentPage;
  if (currentPage === pageTitle) {
    isCurrentPage = true;
  }

  return (
    <div className={`side ${side} ${isCurrentPage && 'currentside'}`}>
      {isCurrentPage && <PageRotation />}

      {pageTitle === 'home' && <Home isCurrentPage={isCurrentPage} />}
      {pageTitle === 'about' && <About isCurrentPage={isCurrentPage} />}
      {pageTitle === 'contact' && <Contact isCurrentPage={isCurrentPage} />}
      {pageTitle === 'products' && <Products isCurrentPage={isCurrentPage} />}
      {pageTitle === 'login' && <Login isCurrentPage={isCurrentPage} />}
      {pageTitle === 'register' && <Register isCurrentPage={isCurrentPage} />}
    </div>
  );
};

export default CubeSide;
