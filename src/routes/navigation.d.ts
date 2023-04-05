import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootParamListI = {
  home: undefined;
  signIn: undefined;
  barber_attendance: undefined;
  initial_screen: undefined;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootParamListI {}
  }
}
export type NavigationProps<T = keyof RootParamListI> = NativeStackScreenProps<
  RootParamListI,
  T
>;
