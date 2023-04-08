import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {QueryClientProvider} from 'react-query';
import queryClient from '../repositories/queryClient';
import {MAIN} from '../common/themes/theme';

export const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

type Props = {
  children: React.ReactNode;
};

export default function WrapperProvider({children}: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NativeBaseProvider theme={MAIN} initialWindowMetrics={inset}>
          {children}
        </NativeBaseProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
