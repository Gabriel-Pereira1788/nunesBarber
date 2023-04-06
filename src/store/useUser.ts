import {useQuery} from 'react-query';
import {Auth} from '../repositories/services/Auth/auth';
import {QUERY_KEYS} from '../constants/querysKey';

const auth = new Auth();

export function useUser() {
  const {
    data: user,
    isLoading,
    isRefetching,
  } = useQuery([QUERY_KEYS.user], auth.persistUser);

  return {
    user,
    isLoading,
    isRefetching,
  };
}
