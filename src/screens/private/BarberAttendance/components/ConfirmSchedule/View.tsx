import React from 'react';
import * as S from 'native-base';
import {Calendar} from 'phosphor-react-native';
import {DataAttendance} from '../../useViewModel';
import Animated, {FadeInDown} from 'react-native-reanimated';

interface ConfirmScheduleProps {
  handleDataAttendance: (data: DataAttendance) => void;
}

export default function ConfirmSchedule({
  handleDataAttendance,
}: ConfirmScheduleProps) {
  const cleanUp = React.useCallback(() => {
    handleDataAttendance({
      date: '',
      hour: '',
    });
  }, [handleDataAttendance]);

  React.useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);

  return (
    <Animated.View
      entering={FadeInDown.delay(150).duration(300)}
      style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        padding: 15,
        justifyContent: 'space-between',
        height: 170,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#fff',
        elevation: 5,
      }}>
      <S.HStack w="100%" alignItems="center" justifyContent="space-between">
        <S.HStack space={2} alignItems="center">
          <Calendar weight="fill" size={20} color="#08090a" />
          <S.Text color="#08090a">Friday,August 12</S.Text>
        </S.HStack>
        <S.Text color="#08090ab7">12:00 - 12:45</S.Text>
      </S.HStack>

      <S.Button
        backgroundColor="#010102"
        borderRadius={40}
        p={5}
        _text={{
          fontWeight: 500,
          color: '#fff',
          fontSize: 'md',
        }}>
        Agendar agora
      </S.Button>
    </Animated.View>
  );
}
