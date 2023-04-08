import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {SignInViewModel} from '../models';
import {useSignIn} from '../useViewModel';
import WrapperProvider from '../../../../components/WrapperProvider';
import SignIn from '../View';

const useSignInMock = useSignIn as jest.Mock<SignInViewModel>;

jest.mock('../useViewModel');

const handleFormMock = jest.fn();
const handleSubmit = jest.fn();

const redirectMock = jest.fn();
beforeAll(() => {
  useSignInMock.mockImplementation(() => ({
    errors: null,
    formData: {
      email: '',
      password: '',
    },
    handleFormData: handleFormMock,
    loading: false,
    onSubmit: handleSubmit,
    redirect: redirectMock,
  }));
});

const navigationMock = {
  replace: jest.fn(),
} as any;

const route = {} as any;

describe('SignIn', () => {
  it('render component correctly', () => {
    const {getByPlaceholderText, getByText, getByTestId} = render(
      <WrapperProvider>
        <SignIn navigation={navigationMock} route={route} />
      </WrapperProvider>,
    );

    const inputEmail = getByPlaceholderText('Email');
    const inputPassword = getByPlaceholderText('Senha');
    const buttonSubmit = getByText('Continuar');
    const register = getByTestId('register');

    expect(inputEmail).toBeTruthy();
    expect(inputPassword).toBeTruthy();
    expect(buttonSubmit).toBeTruthy();
    expect(register).toBeTruthy();
  });

  it('change values form', () => {
    const {getByPlaceholderText, getByText} = render(
      <WrapperProvider>
        <SignIn navigation={navigationMock} route={route} />
      </WrapperProvider>,
    );

    const inputEmail = getByPlaceholderText('Email');
    const inputPassword = getByPlaceholderText('Senha');
    const buttonSubmit = getByText('Continuar');

    fireEvent.changeText(inputEmail, 'teste@gmail.com');
    fireEvent.changeText(inputPassword, 'teste123');
    fireEvent.press(buttonSubmit);

    console.log(inputEmail.props);

    expect(handleFormMock).toHaveBeenCalledWith('email', 'teste@gmail.com');
    expect(handleFormMock).toHaveBeenCalledWith('password', 'teste123');
    expect(handleSubmit).toBeCalled();
  });

  it('redirect to signUp screen', () => {
    const {getByTestId} = render(
      <WrapperProvider>
        <SignIn navigation={navigationMock} route={route} />
      </WrapperProvider>,
    );

    const register = getByTestId('register');

    fireEvent.press(register);

    expect(redirectMock).toBeCalled();
  });
});
