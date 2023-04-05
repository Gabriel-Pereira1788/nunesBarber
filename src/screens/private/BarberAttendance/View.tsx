import React from 'react';
import * as S from 'native-base';
import InfoBarber from './components/InfoBarber/View';
import ContainerScheduling from './components/ContainerScheduling/View';

import Animated from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {useBarberAttendance} from './useViewModel';
import {modalRef} from '../../../components/Modal/View';
import ConfirmSchedule from './components/ConfirmSchedule/View';

type Props = {};
const barberPhoto =
  'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';

export default function BarberAttendance({}: Props) {
  const {
    stylesAnimation,
    conditionToSchedule,
    toggleMostView,
    handleDataAttendance,
  } = useBarberAttendance();

  React.useEffect(() => {
    if (conditionToSchedule) {
      modalRef.current?.show(() => (
        <ConfirmSchedule handleDataAttendance={handleDataAttendance} />
      ));
    }
  }, [conditionToSchedule, handleDataAttendance]);
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
          style={{
            transform: [{translateY: -5}],
          }}
          backgroundColor="#08090a"
          alignItems="center"
          justifyContent="flex-start">
          <ContainerScheduling handleDataAttendance={handleDataAttendance} />
        </S.VStack>
      </Animated.View>
    </S.VStack>
  );
}
