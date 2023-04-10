import {act, renderHook} from '@testing-library/react-hooks';
import {useAlert} from '../useAlert';
import {alertRef} from '../View';

import {AlertConfig} from '../model';

describe('useAlert', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  it('call open function correctly', () => {
    const {result} = renderHook(() => useAlert({alertRef}));

    const alertConfig: AlertConfig = {
      isOpen: true,
      text: 'teste',
      status: 'success',
    };

    act(() => {
      result.current.open(alertConfig);
    });
    expect(result.current.alertConfig.isOpen).toEqual(alertConfig.isOpen);
    expect(result.current.alertConfig.text).toEqual(alertConfig.text);
    expect(result.current.alertConfig.status).toEqual(alertConfig.status);
  });

  it('call hide function correclty', () => {
    const {result} = renderHook(() => useAlert({alertRef}));

    act(() => {
      result.current.hide();
    });

    expect(result.current.alertConfig.isOpen).toEqual(false);
  });
});
