import React from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {ProgressBarProps} from './View';
import {ProgressBarViewModel} from './model';

type HookProgressBarProps = Pick<ProgressBarProps, 'finishAction'>;

export function useProgressBar({
  finishAction,
}: HookProgressBarProps): ProgressBarViewModel {
  const idTimeout = React.useRef<number | null>();
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
      finishAction();
      clearInterval(idTimeout.current);
    }
  }, [currentProgress, totalProgress, finishAction]);

  return {styleProgress, setCurrentProgress, setTotalProgress};
}
