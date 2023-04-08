import {act, renderHook} from '@testing-library/react-hooks';
import {useSignUp} from '../useViewModel';
import {useAuth} from '../../../../repositories/firebase/useAuth';

const useAuthMock = useAuth as jest.Mock<any>;

jest.mock('../../../../repositories/firebase/useAuth');

const signUpMock = jest.fn();

const navigation = {
  replace: jest.fn(),
  navigate: jest.fn(),
} as any;

beforeAll(() => {
  useAuthMock.mockImplementation(() => ({
    signUp: signUpMock,
  }));
});

describe('useSignIn', () => {
  it('change form data correctly', () => {
    const {result} = renderHook(() => useSignUp({navigation}));

    act(() => {
      result.current.handleFormData('email', 'teste@gmail.com');
      result.current.handleFormData('password', 'teste123');
      result.current.handleFormData('name', 'teste');
    });

    expect(result.current.formData.email).toEqual('teste@gmail.com');
    expect(result.current.formData.password).toEqual('teste123');
    expect(result.current.formData.name).toEqual('teste');
  });

  it('call submit without values', async () => {
    const {result} = renderHook(() => useSignUp({navigation}));

    await act(async () => {
      await result.current.onSubmit();
    });

    expect(result.current.errors?.email).toEqual('Campo vazio');
    expect(result.current.errors?.password).toEqual('Campo vazio');
    expect(result.current.errors?.name).toEqual('Campo vazio');
  });

  it('onsubmit method called correctly', async () => {
    const {result} = renderHook(() => useSignUp({navigation}));

    act(() => {
      result.current.handleFormData('email', 'teste@gmail.com');
      result.current.handleFormData('password', 'teste123');
      result.current.handleFormData('name', 'teste');
    });

    await act(async () => {
      await result.current.onSubmit();
    });

    console.log(result.current.errors);

    expect(navigation.replace).toHaveBeenCalledWith('home');

    expect(signUpMock).toBeTruthy();
  });
});
