import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Home from '../screens/private/Home/View';
import BarberAttendance from '../screens/private/BarberAttendance/View';
import InitialScreen from '../screens/public/InitialScreen/View';
import {RootParamListI} from './navigation';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/public/SignIn/View';
import SignUp from '../screens/public/SignUp/View';

type Props = {};
const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
};
const Stack = createStackNavigator<RootParamListI>();

export default function Router({}: Props) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={TransitionScreenOptions}>
        <Stack.Screen
          name="signIn"
          component={SignIn}
          options={{
            headerTransparent: true,
            headerTitle: '',
          }}
        />

        <Stack.Screen
          name="signUp"
          component={SignUp}
          options={{
            headerTransparent: true,
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="initial_screen"
          component={InitialScreen}
          options={{
            headerTransparent: true,
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerTransparent: true,
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="barber_attendance"
          component={BarberAttendance}
          options={{
            headerTintColor: '#fff',
            headerTransparent: true,
            headerTitle: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
