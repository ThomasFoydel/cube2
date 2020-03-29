import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  currentTransform: `rotate3d(0, 100, 0, 270deg)`,
  currentPage: 'home',
  springConfig: 'slow'
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function changeRotation(rotationVal) {
    dispatch({
      type: 'CHANGE_ROTATION',
      payload: rotationVal
    });
  }
  function changeCurrentPage(pageName) {
    dispatch({
      type: 'CHANGE_CURRENT_PAGE',
      payload: pageName
    });
  }

  const { currentTransform, currentPage, springConfig } = state;
  return (
    <GlobalContext.Provider
      value={{
        springConfig,
        changeRotation,
        currentTransform,
        currentPage,
        changeCurrentPage
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
