import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import WrapperProvider from '../../WrapperProvider';
import Modal from '../View';
import {useModal} from '../useModal';
import {ModalViewModel} from '../model';

import * as S from 'native-base';

const useModalMock = useModal as jest.Mock<ModalViewModel>;

const hideMock = jest.fn();

jest.mock('../useModal');

beforeAll(() => {
  useModalMock.mockImplementation(() => ({
    hide: hideMock,
    visible: true,
  }));
});

describe('Modal', () => {
  it('render component correctly', () => {
    const {getByText} = render(
      <WrapperProvider>
        <Modal>
          <S.Modal.Content>
            <S.Text>Teste</S.Text>
          </S.Modal.Content>
        </Modal>
      </WrapperProvider>,
    );

    expect(getByText('Teste')).toBeTruthy();
  });

  it('call hide function to close modal', () => {
    const {getByText} = render(
      <WrapperProvider>
        <Modal>
          <S.Modal.Content>
            <S.Text>Teste</S.Text>
            <S.Button onPress={hideMock}>Closed</S.Button>
          </S.Modal.Content>
        </Modal>
      </WrapperProvider>,
    );

    fireEvent.press(getByText('Closed'));

    expect(hideMock).toBeCalled();
  });

  describe('render without visible', () => {
    beforeEach(() => {
      useModalMock.mockImplementation(() => ({
        hide: hideMock,
        visible: false,
      }));
    });
    it('render component without visible', () => {
      const {queryByTestId} = render(
        <WrapperProvider>
          <Modal>
            <S.Modal.Content>
              <S.Text>Teste</S.Text>
            </S.Modal.Content>
          </Modal>
        </WrapperProvider>,
      );

      expect(queryByTestId('modal')).toBeNull();
    });
  });
});
