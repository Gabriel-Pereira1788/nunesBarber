import React from 'react';
import WrapperProvider from '../../../../components/WrapperProvider';
import {useInitialScreen} from '../useInitialScreen';

import {render} from '@testing-library/react-native';
import InitialScreen from '../View';
const useInitialMock = useInitialScreen as jest.Mock<any>;

const redirectMock = jest.fn();

jest.mock('../useInitialScreen');

beforeAll(() => {
  jest.useFakeTimers();

  useInitialMock.mockImplementation(() => ({
    redirectPage: redirectMock,
  }));
});

const navigationMock = {
  replace: jest.fn(),
} as any;

const route = {} as any;
describe('InitialScreen', () => {
  it('render component correctly', () => {
    const {getByTestId} = render(
      <WrapperProvider>
        <InitialScreen navigation={navigationMock} route={route} />
      </WrapperProvider>,
    );

    const imageLogo = getByTestId('image-logo');
    const imageBackground = getByTestId('image-background');
    const progressBar = getByTestId('progress-bar');
    console.log(imageLogo.props);

    expect(imageLogo).toBeDefined();
    expect(imageBackground).toBeDefined();
    expect(progressBar).toBeDefined();
  });

  it('render image path correctly', () => {
    const imagePath = '../../../src/common/assets/images/man.png';

    const imageInitial =
      '../../../src/common/assets/images/initial-background.jpg';
    const {getByTestId} = render(
      <WrapperProvider>
        <InitialScreen navigation={navigationMock} route={route} />
      </WrapperProvider>,
    );

    const imageLogo = getByTestId('image-logo');
    const imageBackground = getByTestId('image-background');

    console.log(imageBackground.props);

    expect(imageLogo.props.source.testUri).toEqual(imagePath);
    expect(imageBackground.props.source.testUri).toEqual(imageInitial);
  });
});
