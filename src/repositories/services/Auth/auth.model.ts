import {User} from '../../../common/models/Auth';

export interface AuthModel {
  persistUser: () => Promise<User>;
  setUser: (dataUser: User) => Promise<void>;
  signOut: () => Promise<void>;
}
