import {useContext, createContext, useState} from 'react';
import {Appearance, StatusBar} from 'react-native';
import React from 'react';

const AppContext = createContext({} as IAppContext);

interface IAppProvider {
  children: React.ReactNode;
}

export default function AppProvider({children}: IAppProvider) {
  const [theme, setTheme] = useState(Appearance.getColorScheme()!);
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme!);
  });

  return (
    <AppContext.Provider value={{theme, setTheme}}>
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme === 'dark' ? '#fff' : '#333'}
      />

      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};
