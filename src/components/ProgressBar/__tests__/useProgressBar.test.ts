import {act, renderHook} from '@testing-library/react-hooks';
import {useProgressBar} from '../useProgressBar';
const finishActionMock = jest.fn();

beforeAll(() => {
  jest.useFakeTimers();
  jest.runAllTimers();
});
describe('useProgressBar', () => {
  it('call setcurrentProgress correclty', () => {
    const {result} = renderHook(() =>
      useProgressBar({
        finishAction: finishActionMock,
        progressStep: 10,
      }),
    );

    act(() => {
      result.current.setCurrentProgress(100);
    });

    expect(result.current.currentProgress).toEqual(100);
  });

  it('call setTotalProgress correclty', () => {
    const {result} = renderHook(() =>
      useProgressBar({
        finishAction: finishActionMock,
        progressStep: 10,
      }),
    );
    act(() => {
      result.current.setTotalProgress(100);
    });

    expect(result.current.totalProgress).toEqual(100);
  });

  it('return styleProgress defined', () => {
    const {result} = renderHook(() =>
      useProgressBar({
        finishAction: finishActionMock,
        progressStep: 10,
      }),
    );

    expect(result.current.styleProgress).toBeTruthy();
  });
});
