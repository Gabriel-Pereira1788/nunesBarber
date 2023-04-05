import React, {useRef} from 'react';
import * as S from 'native-base';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface ProgressBarProps extends S.IBoxProps {
  redirectPage: () => void;
}

export default function ProgressBar({redirectPage}: ProgressBarProps) {
  const idTimeout = useRef<number | null>();
  const [totalProgress, setTotalProgress] = React.useState(0);
  const [currentProgress, setCurrentProgress] = React.useState(0);

  const widthValue = useSharedValue(100);
  const toggleOpacity = useSharedValue(false);
  const styleProgress = useAnimatedStyle(() => {
    return {
      opacity: withTiming(toggleOpacity.value ? 0.5 : 1.3),
      width: withTiming(widthValue.value, {
        duration: 500,
      }),
    };
  });

  React.useEffect(() => {
    if (totalProgress > 0 && widthValue.value < totalProgress) {
      idTimeout.current = setInterval(() => {
        widthValue.value = widthValue.value + 10;
        toggleOpacity.value = !toggleOpacity.value;
      }, 1000);
    }
  }, [totalProgress, widthValue, toggleOpacity]);

  React.useEffect(() => {
    if (
      totalProgress > 0 &&
      currentProgress >= totalProgress &&
      idTimeout.current
    ) {
      redirectPage();
      clearInterval(idTimeout.current);
    }
  }, [currentProgress, totalProgress, redirectPage]);

  return (
    <S.Box w="100%" px={5} py={3} position="absolute" bottom={0}>
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
