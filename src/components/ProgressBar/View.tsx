import React from 'react';
import * as S from 'native-base';
import Animated from 'react-native-reanimated';
import {useProgressBar} from './useProgressBar';

export interface ProgressBarProps extends S.IBoxProps {
  finishAction: () => void;
}

export default function ProgressBar({finishAction}: ProgressBarProps) {
  const {styleProgress, setCurrentProgress, setTotalProgress} = useProgressBar({
    finishAction,
  });

  return (
    <S.Box w="100%" position="absolute" bottom={0}>
      <S.VStack
        onLayout={e => {
          const width = e.nativeEvent.layout.width;
          setTotalProgress(width);
        }}
        w={'100%'}
        rounded="3xl"
        backgroundColor="#dddddd2a"
        height={1}
        overflow="hidden">
        <Animated.View
          onLayout={e => {
            const width = e.nativeEvent.layout.width;
            setCurrentProgress(width);
          }}
          style={[
            styleProgress,
            {
              height: 10,
              backgroundColor: '#ddd',
            },
          ]}
        />
      </S.VStack>
    </S.Box>
  );
}
