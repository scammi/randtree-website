// src/context/state.js
import { createContext, useContext, useState } from 'react';

const AppContext = createContext([{}, () => {}]);

export function AppContexWrapper({ children }) {
    const [state, setState] = useState({
        connected: false,
        latestBatch: null,
        batches: {},
        batchOnDisplayIndex: null,
        account: '',
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