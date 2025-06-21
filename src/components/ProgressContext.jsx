import React, { createContext, useContext, useState } from 'react';

const ProgressContext = createContext();

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState({});

  const updateProgress = (subject, topic, score) => {
    setProgress(prev => ({
      ...prev,
      [subject]: {
        ...(prev[subject] || {}),
        [topic]: score
      }
    }));
  };

  return (
    <ProgressContext.Provider value={{ progress, updateProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};
