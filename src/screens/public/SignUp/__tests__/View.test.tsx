import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {SignUpViewModel} from '../models';
import {useSignUp} from '../useViewModel';
import WrapperProvider from '../../../../components/WrapperProvider';

import SignUp from '../View';

const useSignUpMock = useSignUp as jest.Mock<SignUpViewModel>;

jest.mock('../useViewModel');

const handleFormMock = jest.fn();
const handleSubmit = jest.fn();

const redirectMock = jest.fn();
beforeAll(() => {
  useSignUpMock.mockImplementation(() => ({
    errors: null,
    formData: {
      name: '',
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
    const {getByPlaceholderText, getByText} = render(
      <WrapperProvider>
        <SignUp navigation={navigationMock} route={route} />
      </WrapperProvider>,
    );

    const inputEmail = getByPlaceholderText('Email');
    const inputName = getByPlaceholderText('Nome');
    const inputPassword = getByPlaceholderText('Senha');
    const buttonSubmit = getByText('Confirmar');

    expect(inputEmail).toBeTruthy();
    expect(inputPassword).toBeTruthy();
    expect(inputName).toBeTruthy();
    expect(buttonSubmit).toBeTruthy();
  });

  it('change values form', () => {
    const {getByPlaceholderText, getByText} = render(
      <WrapperProvider>
        <SignUp navigation={navigationMock} route={route} />
      </WrapperProvider>,
    );

    const inputEmail = getByPlaceholderText('Email');
    const inputPassword = getByPlaceholderText('Senha');
    const inputName = getByPlaceholderText('Nome');
    const buttonSubmit = getByText('Confirmar');

    fireEvent.changeText(inputEmail, 'teste@gmail.com');
    fireEvent.changeText(inputName, 'teste');
    fireEvent.changeText(inputPassword, 'teste123');
    fireEvent.press(buttonSubmit);

    console.log(inputEmail.props);

    expect(handleFormMock).toHaveBeenCalledWith('email', 'teste@gmail.com');
    expect(handleFormMock).toHaveBeenCalledWith('password', 'teste123');
    expect(handleFormMock).toHaveBeenCalledWith('name', 'teste');
    expect(handleSubmit).toBeCalled();
  });

  it('submit called', () => {
    const {getByText} = render(
      <WrapperProvider>
        <SignUp navigation={navigationMock} route={route} />
      </WrapperProvider>,
    );

    const buttonSubmit = getByText('Confirmar');

    fireEvent.press(buttonSubmit);

    expect(handleSubmit).toBeCalled();
  });
});
