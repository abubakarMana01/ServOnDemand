import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {AppProvider} from './src/context';
import {RootNavigator} from './src/navigation';

const App = () => {
  return (
    <AppProvider>
      <SafeAreaView style={styles.container}>
        <RootNavigator />
      </SafeAreaView>
    </AppProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
