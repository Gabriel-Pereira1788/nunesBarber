import {useNavigation} from '@react-navigation/native';
import {useUser} from '../../../store/useUser';
import {MONTHS_DAYS, WEEK_DAYS} from '../../../common/constants/date';
import {HomeViewModel} from './models';
import {useIsFocused} from '../../../hooks/useIsFocused';

const currentDate = new Date();

export function useHome(): HomeViewModel {
  const navigation = useNavigation();
  const {isFocused} = useIsFocused({});
  const {user} = useUser();
  const formatedDate = `${WEEK_DAYS[currentDate.getDay()]},${
    MONTHS_DAYS[currentDate.getMonth()]
  } ${currentDate.getDate()}`;

  function redirectScreen() {
    navigation.navigate('barber_attendance');
  }

  return {
    formatedDate,
    isFocused,
    username: user?.name || '',
    redirectScreen,
  };
}
