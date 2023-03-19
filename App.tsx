import React from 'react';
import {AppProvider} from './src/context';
import {RootNavigator} from './src/navigation';

const App = () => {
  return (
    <AppProvider>
      <RootNavigator />
    </AppProvider>
  );
};

export default App;
