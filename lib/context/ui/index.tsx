import React, { createContext, ReactNode, useContext, useState } from 'react';

const initial = {
  showHeader: false,
};

interface IUIContext {
  state: {
    showHeader: boolean;
  };
  setState: React.Dispatch<
    React.SetStateAction<{
      showHeader: boolean;
    }>
  >;
}

const UIContext = createContext<IUIContext | null>(null);

interface IUIContextProvider {
  children: ReactNode;
}

const UIContextProvider: React.FC<IUIContextProvider> = ({ children }) => {
  const [state, setState] = useState(initial);
  const value = { state, setState };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export default UIContextProvider;

export const useUIContext = () => useContext(UIContext);
