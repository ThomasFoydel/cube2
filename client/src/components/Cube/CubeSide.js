import React, { useContext, useState } from 'react';
import PageRotation from 'components/Controls/PageRotation';
import { GlobalContext } from 'context/GlobalContext';
import Home from 'components/Home/Home';
import About from 'components/About/About';
import Contact from 'components/Contact/Contact';

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
    </div>
  );
};

export default CubeSide;
