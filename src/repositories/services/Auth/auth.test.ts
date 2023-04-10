import AsyncStorage from '@react-native-async-storage/async-storage';
import {Auth} from './auth';

import {STORAGE_KEYS} from '../../../common/constants/querysKey';
import {RoleUser, User} from '../../../common/models/Auth';

jest.mock('@react-native-async-storage/async-storage');

const AsyncStorageMock = AsyncStorage as jest.Mocked<typeof AsyncStorage>;

const mockUser: User = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  photoURL: 'http://example.com',
  uid: '12345',
  createdAt: new Date().toISOString(),
  role_id: RoleUser.Client,
};

describe('Auth class', () => {
  let auth: Auth;

  beforeEach(() => {
    auth = new Auth();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should persist user', async () => {
    AsyncStorageMock.getItem.mockResolvedValueOnce(JSON.stringify(mockUser));

    const result = await auth.persistUser();

    expect(result).toEqual(mockUser);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(STORAGE_KEYS.user);
  });

  it('should set user', async () => {
    AsyncStorageMock.setItem.mockResolvedValueOnce();

    await auth.setUser(mockUser);

    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      STORAGE_KEYS.user,
      JSON.stringify(mockUser),
    );
  });

  it('should sign out user', async () => {
    await auth.signOut();

    expect(AsyncStorageMock.removeItem).toHaveBeenCalledWith(STORAGE_KEYS.user);
  });
});
