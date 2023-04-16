import React, {useEffect} from 'react';
import {AppProvider} from './src/context';
import {RootNavigator} from './src/navigation';
import {AppState, AppStateStatus, Platform} from 'react-native';
import {focusManager} from '@tanstack/react-query';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {useNetInfo} from '@react-native-community/netinfo';
import {NoInternetView} from './src/components';

const queryClient = new QueryClient();

const App = () => {
  const netInfo = useNetInfo();

  function onAppStateChange(status: AppStateStatus) {
    if (Platform.OS !== 'web') {
      focusManager.setFocused(status === 'active');
    }
  }

  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange);

    return () => subscription.remove();
  }, []);

  if (!netInfo.isConnected) {
    return <NoInternetView />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <RootNavigator />
      </AppProvider>
    </QueryClientProvider>
  );
};

export default App;
