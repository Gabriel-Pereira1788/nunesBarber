import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import WrapperProvider from '../WrapperProvider';
import Button from './View';

describe('Button', () => {
  it('render component correctly', () => {
    const {getByText} = render(
      <WrapperProvider>
        <Button>confirm</Button>
      </WrapperProvider>,
    );

    expect(getByText('confirm')).toBeTruthy();
  });

  it('pressed function called', () => {
    const press = jest.fn();
    const {getByText} = render(
      <WrapperProvider>
        <Button onPress={press}>confirm</Button>
      </WrapperProvider>,
    );

    fireEvent.press(getByText('confirm'));

    expect(press).toBeCalled();
  });
});
