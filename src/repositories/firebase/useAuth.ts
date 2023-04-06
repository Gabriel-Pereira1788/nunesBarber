import authFB from '@react-native-firebase/auth';

import {AuthDTO} from '../../models/Auth';
import {formatUser} from '../../utils/formatUser';
import {Auth} from '../services/Auth/auth';
const auth = new Auth();

export function useAuth() {
  async function signUp(data: AuthDTO) {
    const result = await authFB().createUserWithEmailAndPassword(
      data.email,
      data.password,
    );

    if (result.user) {
      result.user.updateProfile({
        displayName: data.name!,
      });
      const dataUser = formatUser(result.user, data.name!);

      await auth.setUser(dataUser);
    }
  }

  async function signIn(data: AuthDTO) {
    const result = await authFB().signInWithEmailAndPassword(
      data.email,
      data.password,
    );

    if (result.user) {
      const dataUser = formatUser(result.user, result.user.displayName!);

      await auth.setUser(dataUser);
    }
  }

  return {signUp, signIn};
}
