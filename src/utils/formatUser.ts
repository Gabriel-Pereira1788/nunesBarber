import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {RoleUser, User} from '../common/models/Auth';

export function formatUser(
  user: FirebaseAuthTypes.User,
  displayName: string,
  roleId?: RoleUser,
): User {
  return {
    uid: user.uid,
    name: displayName,
    email: user.email!,
    photoURL: user.photoURL,
    createdAt:
      user.metadata && user.metadata.creationTime
        ? new Date(user.metadata.creationTime!).toISOString()
        : new Date().toISOString(),
    role_id: roleId,
  };
}
