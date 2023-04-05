import {useContext, createContext, useState} from 'react';
import {Appearance, StatusBar} from 'react-native';
import React from 'react';
import {Colors} from '../constants';

const AppContext = createContext({} as IAppContext);

interface IAppProvider {
  children: React.ReactNode;
}

export default function AppProvider({children}: IAppProvider) {
  const [user, setUser] = useState<IAppContext['user']>(null);
  const [theme, setTheme] = useState(Appearance.getColorScheme()!);
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme!);
  });

  return (
    <AppContext.Provider value={{theme, setTheme, user, setUser}}>
      <StatusBar
        barStyle={user ? 'light-content' : 'dark-content'}
        backgroundColor={user ? Colors.dark : Colors.white}
      />

      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};
