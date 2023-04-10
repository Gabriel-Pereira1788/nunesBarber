import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import WrapperProvider from '../../WrapperProvider';
import Alert from '../View';
import {useAlert} from '../useAlert';
import {AlertViewModel} from '../model';

const useAlertMock = useAlert as jest.Mock<AlertViewModel>;

jest.mock('../useAlert.ts');

const hideMock = jest.fn();
const openMock = jest.fn();

beforeAll(() => {
  useAlertMock.mockImplementation(() => ({
    alertConfig: {
      isOpen: true,
      text: 'teste',
      status: 'success',
    },
    hide: hideMock,
    open: openMock,
  }));
});

describe('Alert', () => {
  it('render component correctly', () => {
    const {getByText, getByTestId} = render(
      <WrapperProvider>
        <Alert />
      </WrapperProvider>,
    );

    const alert = getByTestId('alert');
    const iconStatus = getByTestId('icon-status');

    console.log(alert.props);
    expect(getByText('teste')).toBeTruthy();
    expect(alert).toBeDefined();
    expect(iconStatus).toBeDefined();
  });

  it('call hide function after press component', () => {
    const {getByTestId} = render(
      <WrapperProvider>
        <Alert />
      </WrapperProvider>,
    );

    const alert = getByTestId('alert');
    fireEvent.press(alert);

    expect(hideMock).toBeCalled();
  });
});
