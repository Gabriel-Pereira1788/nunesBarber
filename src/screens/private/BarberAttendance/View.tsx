import React from 'react';
import * as S from 'native-base';
import InfoBarber from './components/InfoBarber/View';
import ContainerScheduling from './components/ContainerScheduling/View';
import {SIZES} from '../../../constants/sizes';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  GestureEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
type Props = {};
const barberPhoto =
  'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';

export default function BarberAttendance({}: Props) {
  const valueAnimated = useSharedValue('full');
  const stylesAnimation = useAnimatedStyle(() => {
    return {
      flex: withTiming(valueAnimated.value === 'full' ? 3 : 1, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });

  function toggleMostView(event: GestureEvent<PanGestureHandlerEventPayload>) {
    console.log(event.nativeEvent.translationY);
    const translationY = event.nativeEvent.translationY;
    if (translationY > 50) {
      valueAnimated.value = ' middle';
    } else {
      valueAnimated.value = 'full';
    }
  }
  return (
    <S.VStack flex={1} backgroundColor="#08090a" justifyContent="flex-start">
      <PanGestureHandler onGestureEvent={toggleMostView}>
        <S.Image
          source={{uri: barberPhoto}}
          width="100%"
          flex={2}
          alt="image-barber-focus"
        />
      </PanGestureHandler>
      <Animated.View style={stylesAnimation}>
        <InfoBarber />
        <S.VStack
          flex={1}
          borderTopRadius={60}
          backgroundColor="#12131a"
          alignItems="center"
          justifyContent="flex-start">
          <ContainerScheduling />
        </S.VStack>
      </Animated.View>
    </S.VStack>
  );
}
