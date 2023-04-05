/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NativeBaseProvider, StatusBar} from 'native-base';
import {MAIN} from './src/themes/theme';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Router from './src/routes/Router';
import Modal from './src/components/Modal/View';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NativeBaseProvider theme={MAIN}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={'#08090a'}
          translucent={true}
        />
        <Router />
        <Modal />
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}

export default App;
