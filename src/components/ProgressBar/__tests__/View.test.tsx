import React from 'react';
import WrapperProvider from '../../WrapperProvider';
import ProgressBar from '../View';
import {fireEvent, render} from '@testing-library/react-native';
import {useProgressBar} from '../useProgressBar';
import {ProgressBarViewModel} from '../model';

const useProgressMock = useProgressBar as jest.Mock<ProgressBarViewModel>;
const setCurrentProgressMock = jest.fn();
const finishActionMock = jest.fn();
const setTotalProgressMock = jest.fn();

const styleProgressMock = {
  opacity: 0.5,
  width: 100,
} as any;
beforeAll(() => {
  useProgressMock.mockImplementation(() => ({
    setCurrentProgress: setCurrentProgressMock,
    setTotalProgress: setTotalProgressMock,
    styleProgress: styleProgressMock,
  }));
});

jest.mock('../useProgressBar.ts');

describe('ProgressBar', () => {
  it('render component correclty', () => {
    const {getByTestId} = render(
      <WrapperProvider>
        <ProgressBar finishAction={finishActionMock} />
      </WrapperProvider>,
    );

    const progressWrapper = getByTestId('progress-wrapper');
    const progressBar = getByTestId('progress-bar');

    console.log(progressBar.props.style);
    expect(progressWrapper).toBeDefined();
    expect(progressBar).toBeDefined();
  });

  it('progress bar opacity and width defination correclty', () => {
    const {getByTestId} = render(
      <WrapperProvider>
        <ProgressBar finishAction={finishActionMock} />
      </WrapperProvider>,
    );

    const progressBar = getByTestId('progress-bar');

    expect(progressBar.props.style.opacity).toEqual(0.5);

    expect(progressBar.props.style.width).toEqual(100);
  });

  it('set current progress to be called', () => {
    const {getByTestId} = render(
      <WrapperProvider>
        <ProgressBar finishAction={finishActionMock} />
      </WrapperProvider>,
    );

    const progressBar = getByTestId('progress-bar');

    const layout = {x: 0, y: 0, width: 100, height: 200};

    fireEvent(progressBar, 'layout', {nativeEvent: {layout}});

    expect(setCurrentProgressMock).toBeCalledWith(100);
  });

  it('set total progress to be called', () => {
    const {getByTestId} = render(
      <WrapperProvider>
        <ProgressBar finishAction={finishActionMock} />
      </WrapperProvider>,
    );

    const progressWrapper = getByTestId('progress-wrapper');

    const layout = {x: 0, y: 0, width: 300, height: 200};

    fireEvent(progressWrapper, 'layout', {nativeEvent: {layout}});

    expect(setTotalProgressMock).toBeCalledWith(300);
  });
});
