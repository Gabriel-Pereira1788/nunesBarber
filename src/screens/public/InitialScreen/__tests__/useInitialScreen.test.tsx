import {renderHook} from '@testing-library/react-hooks';
import {useInitialScreen} from '../useInitialScreen';
import {useUser} from '../../../../store/useUser';

const useUserMock = useUser as jest.Mock<any>;

jest.mock('../../../../store/useUser');

const navigation = {
  replace: jest.fn(),
} as any;

describe('useInitialScreen', () => {
  test('redirects to signIn screen when user is not authenticated', () => {
    useUserMock.mockReturnValueOnce({user: null});

    const {result} = renderHook(() => useInitialScreen({navigation}));
    result.current.redirectPage();

    expect(navigation.replace).toHaveBeenCalledWith('signIn');
  });

  test('redirects to home screen when user is authenticated', () => {
    useUserMock.mockReturnValueOnce({user: {id: 1}});

    const {result} = renderHook(() => useInitialScreen({navigation}));
    result.current.redirectPage();

    expect(navigation.replace).toHaveBeenCalledWith('home');
  });
});
