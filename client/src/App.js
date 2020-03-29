import React from 'react';
import Cube from 'components/Cube/Cube';
import { GlobalProvider } from 'context/GlobalContext';

import './App.scss';

function App() {
  return (
    <GlobalProvider>
      <div className='background-blur' />
      <div className='app-container'>
        <Cube />
      </div>
    </GlobalProvider>
  );
}

export default App;
