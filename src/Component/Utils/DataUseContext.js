import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(0);

  const updateData = (newData) => {
    console.log(newData);
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () =>{
    return useContext(DataContext);
}
