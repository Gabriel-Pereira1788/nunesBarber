import AsyncStorage from '@react-native-async-storage/async-storage';
import {STORAGE_KEYS} from '../../../common/constants/querysKey';
import {AuthModel} from './auth.model';
import {User} from '../../../common/models/Auth';
import queryClient from '../../queryClient';

export class Auth implements AuthModel {
  async persistUser() {
    const dataUser: User = JSON.parse(
      (await AsyncStorage.getItem(STORAGE_KEYS.user)) as string,
    );

    return dataUser;
  }

  async setUser(dataUser: User) {
    await AsyncStorage.setItem(STORAGE_KEYS.user, JSON.stringify(dataUser));

    queryClient.invalidateQueries();
    queryClient.refetchQueries();
  }

  async signOut() {
    await AsyncStorage.removeItem(STORAGE_KEYS.user);
  }
}
