import React from 'react';
import * as S from 'native-base';
import Animated from 'react-native-reanimated';
import {useProgressBar} from './useProgressBar';

export interface ProgressBarProps extends S.IBoxProps {
  finishAction: () => void;
  progressStep?: number;
}

export default function ProgressBar({
  progressStep,
  finishAction,
  ...rest
}: ProgressBarProps) {
  const {styleProgress, setCurrentProgress, setTotalProgress} = useProgressBar({
    finishAction,
    progressStep,
  });

  return (
    <S.Box w="100%" position="absolute" bottom={0} {...rest}>
      <S.VStack
        testID="progress-wrapper"
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
          testID="progress-bar"
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
