import React from 'react';
import {render} from '@testing-library/react-native';
import WrapperAuthForm from './View';
import WrapperProvider from '../WrapperProvider';
import {Text} from 'native-base';

describe('WrapperAuthForm', () => {
  it('render component correcty', () => {
    const {getByText} = render(
      <WrapperProvider>
        <WrapperAuthForm title="Teste wrapper">
          <Text>teste</Text>
        </WrapperAuthForm>
      </WrapperProvider>,
    );

    expect(getByText('teste')).toBeTruthy();
    expect(getByText('Teste wrapper')).toBeTruthy();
  });

  it('render social button', () => {
    const {getByText, getByTestId} = render(
      <WrapperProvider>
        <WrapperAuthForm title="Teste wrapper">
          <Text>teste</Text>
        </WrapperAuthForm>
      </WrapperProvider>,
    );

    expect(getByText('Continuar com o google')).toBeTruthy();
    expect(getByTestId('icon-google')).toBeTruthy();
  });

  it('render redirect comp', () => {
    const {getByText} = render(
      <WrapperProvider>
        <WrapperAuthForm
          title="Teste wrapper"
          RedirectComp={<Text>redirect test</Text>}>
          <Text>teste</Text>
        </WrapperAuthForm>
      </WrapperProvider>,
    );

    expect(getByText('redirect test')).toBeTruthy();
  });
});
