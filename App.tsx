/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import AuthStack from './src/navigation/AuthStack/AuthStack';
import AppStack from './src/navigation/Drawer/AppStack';

const App = () => {
  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      <AppStack />
  </NavigationContainer>
  );
};

export default App;
