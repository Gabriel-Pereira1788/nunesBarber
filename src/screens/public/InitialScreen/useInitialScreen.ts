import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootParamListI} from '../../../routes/navigation';
import {useUser} from '../../../store/useUser';

type Props = {
  navigation: NativeStackNavigationProp<
    RootParamListI,
    'initial_screen',
    undefined
  >;
};

export function useInitialScreen({navigation}: Props) {
  const {user} = useUser();

  function redirectPage() {
    if (user) {
      navigation.replace('signIn');
    } else {
      navigation.replace('signIn');
    }
  }

  return {redirectPage};
}
