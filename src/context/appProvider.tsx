import {useContext, createContext, useState} from 'react';
import {Appearance, StatusBar} from 'react-native';
import React from 'react';
import {Colors} from '../constants';

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
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.darkBlue} />

      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};
