import React from 'react';
import {render} from '@testing-library/react-native';
import WrapperProvider from '../WrapperProvider';
import RenderIF from './View';
import {Text} from 'native-base';

describe('RenderIF', () => {
  it('render component correctly', () => {
    const {getByText} = render(
      <WrapperProvider>
        <RenderIF condition={true}>
          <Text>teste</Text>
        </RenderIF>
      </WrapperProvider>,
    );

    expect(getByText('teste')).toBeDefined();
  });

  it('render component with condition false', () => {
    const {queryByText} = render(
      <WrapperProvider>
        <RenderIF condition={false}>
          <Text>teste</Text>
        </RenderIF>
      </WrapperProvider>,
    );

    expect(queryByText('teste')).toBeNull();
  });

  it('render alternative component', () => {
    const {queryByText} = render(
      <WrapperProvider>
        <RenderIF
          condition={false}
          AlternativeComponent={<Text>alternative teste</Text>}>
          <Text>teste</Text>
        </RenderIF>
      </WrapperProvider>,
    );

    expect(queryByText('alternative teste')).toBeDefined();
  });
});
