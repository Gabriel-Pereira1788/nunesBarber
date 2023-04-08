/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {StatusBar} from 'native-base';
import Router from './src/routes/Router';
import Modal from './src/components/Modal/View';
import WrapperProvider from './src/components/WrapperProvider';

function App(): JSX.Element {
  return (
    <WrapperProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#08090a'}
        translucent={true}
      />
      <Router />
      <Modal />
    </WrapperProvider>
  );
}

export default App;
