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
import BarberAttendance from './src/screens/private/BarberAttendance/View';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NativeBaseProvider theme={MAIN}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={'#08090a'}
          translucent={true}
        />
        <BarberAttendance />
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}

export default App;
