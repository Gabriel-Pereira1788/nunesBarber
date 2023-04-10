import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Input from './View';
import WrapperProvider from '../WrapperProvider';

const handleChangeMock = jest.fn();

describe('Input', () => {
  it('render component correctly', () => {
    const {getByPlaceholderText} = render(
      <WrapperProvider>
        <Input placeholder="Email" />
      </WrapperProvider>,
    );
    expect(getByPlaceholderText('Email')).toBeTruthy();
  });

  it('change event called', () => {
    const {getByPlaceholderText} = render(
      <WrapperProvider>
        <Input
          placeholder="Email"
          value="teste@gmail.com"
          onChangeText={handleChangeMock}
        />
      </WrapperProvider>,
    );

    const input = getByPlaceholderText('Email');

    fireEvent.changeText(input, 'teste2@email.com');

    expect(handleChangeMock).toBeCalledWith('teste2@email.com');
  });

  it('test error status render', () => {
    const {getByText} = render(
      <WrapperProvider>
        <Input
          error="Campo vazio"
          placeholder="Email"
          value="teste@gmail.com"
          onChangeText={handleChangeMock}
        />
      </WrapperProvider>,
    );

    expect(getByText('Campo vazio')).toBeDefined();
  });
});
