// src/context/state.js
import { createContext, useContext, useState } from 'react';

const AppContext = createContext([{}, () => {}]);

export function AppContexWrapper({ children }) {
    const [state, setState] = useState({
        connected: false,
        currentBatch: 0,
        currentAccount: '',
        provider: {},
        raffleContract: {}
      });
    
  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}