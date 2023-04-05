import React from 'react';
import {
  GestureEvent,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export interface DataAttendance {
  date?: string;
  hour?: string;
}
export function useBarberAttendance() {
  const [dataAttendance, setDataAttendance] = React.useState<DataAttendance>({
    date: '',
    hour: '',
  });

  const conditionToSchedule = !!dataAttendance.date && !!dataAttendance.hour;
  console.log(conditionToSchedule);

  const valueAnimated = useSharedValue('full');
  const stylesAnimation = useAnimatedStyle(() => {
    return {
      flex: withTiming(valueAnimated.value === 'full' ? 3.5 : 1, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });

  function handleDataAttendance(data: DataAttendance) {
    setDataAttendance(prev => ({...prev, ...data}));
  }

  function toggleMostView(event: GestureEvent<PanGestureHandlerEventPayload>) {
    console.log(event.nativeEvent.translationY);
    const translationY = event.nativeEvent.translationY;
    if (translationY > 50) {
      valueAnimated.value = ' middle';
    } else {
      valueAnimated.value = 'full';
    }
  }

  return {
    stylesAnimation,
    dataAttendance,
    conditionToSchedule,
    toggleMostView,
    handleDataAttendance,
  };
}
