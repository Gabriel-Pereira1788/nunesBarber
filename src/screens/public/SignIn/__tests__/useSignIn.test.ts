import {act, renderHook} from '@testing-library/react-hooks';
import {useSignIn} from '../useViewModel';
import {useAuth} from '../../../../repositories/firebase/useAuth';

const useAuthMock = useAuth as jest.Mock<any>;

jest.mock('../../../../repositories/firebase/useAuth');

const signInMock = jest.fn();

const navigation = {
  replace: jest.fn(),
  navigate: jest.fn(),
} as any;

beforeAll(() => {
  useAuthMock.mockImplementation(() => ({
    signIn: signInMock,
  }));
});

describe('useSignIn', () => {
  it('redirect to signup screen', () => {
    const {result} = renderHook(() => useSignIn({navigation}));
    result.current.redirect();
    expect(navigation.navigate).toBeCalledWith('signUp');
  });

  it('change form data correctly', () => {
    const {result} = renderHook(() => useSignIn({navigation}));

    act(() => {
      result.current.handleFormData('email', 'teste@gmail.com');
      result.current.handleFormData('password', 'teste123');
    });

    expect(result.current.formData.email).toEqual('teste@gmail.com');
    expect(result.current.formData.password).toEqual('teste123');
  });

  it('call submit without values', async () => {
    const {result} = renderHook(() => useSignIn({navigation}));

    await act(async () => {
      await result.current.onSubmit();
    });

    expect(true).toBeTruthy();
    expect(result.current.errors?.email).toEqual('Campo vazio');
    expect(result.current.errors?.password).toEqual('Campo vazio');
  });

  it('onsubmit method called correctly', async () => {
    const {result} = renderHook(() => useSignIn({navigation}));

    act(() => {
      result.current.handleFormData('email', 'teste@gmail.com');
      result.current.handleFormData('password', 'teste123');
    });

    await act(async () => {
      await result.current.onSubmit();
    });

    expect(navigation.replace).toBeCalledWith('home');
    expect(signInMock).toBeCalled();
  });
});
