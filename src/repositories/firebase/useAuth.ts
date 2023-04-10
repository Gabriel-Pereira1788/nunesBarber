import authFB from '@react-native-firebase/auth';

import {AuthDTO, User} from '../../common/models/Auth';
import {formatUser} from '../../utils/formatUser';
import {Auth} from '../services/Auth/auth';
import {useFireStore} from './useFirestore';
import {Collections} from '../../common/models/Collections';
const auth = new Auth();

export function useAuth() {
  const {addDoc, getDoc} = useFireStore({collectionType: Collections.users});
  async function signUp(data: AuthDTO) {
    const result = await authFB().createUserWithEmailAndPassword(
      data.email,
      data.password,
    );

    if (result.user) {
      result.user.updateProfile({
        displayName: data.name!,
      });
      const dataUser = formatUser(result.user, data.name!, data.role_id);

      await Promise.all([addDoc<User>(dataUser), auth.setUser(dataUser)]);
    }
  }

  async function signIn(data: AuthDTO) {
    const result = await authFB().signInWithEmailAndPassword(
      data.email,
      data.password,
    );

    if (result.user) {
      const getUser = await getDoc('uid', '==', result.user.uid);
      if (getUser.docs.length > 0) {
        const resultDataUser = getUser.docs[0].data() as User;

        const dataUser = formatUser(
          result.user,
          result.user.displayName!,
          resultDataUser.role_id,
        );

        await auth.setUser(dataUser);
      }
    }
  }

  return {signUp, signIn};
}
