/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import InitialScreen from './src/screens/public/InitialScreen/View';
import {NativeBaseProvider, StatusBar} from 'native-base';
import {MAIN} from './src/themes/theme';
import Home from './src/screens/private/Home/View';

function App(): JSX.Element {
  return (
    <NativeBaseProvider theme={MAIN}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#08090a'}
        translucent={true}
      />
      <Home />
    </NativeBaseProvider>
  );
}

export default App;
