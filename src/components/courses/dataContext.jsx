// DataContext.js
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import Datas from './datas';  

const DataContext = createContext();

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return [...state, action.payload];
    case 'UPDATE_DATA':
      return state.map((data, index) =>
        index === action.payload.index ? action.payload.updatedData : data
      );
    case 'DELETE_DATA':
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(dataReducer, Datas);

  useEffect(() => {
    // You can persist data to localStorage or fetch it from an API
    localStorage.setItem('datas', JSON.stringify(data));
  }, [data]);

  return (
    <DataContext.Provider value={{ data, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
