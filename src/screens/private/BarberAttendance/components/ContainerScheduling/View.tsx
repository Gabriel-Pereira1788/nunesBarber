import React from 'react';
import * as S from 'native-base';
import {CaretLeft, CaretRight} from 'phosphor-react-native';
import CardDay from '../CardDay/View';
import CardTime from '../CardTime/View';
import {DataAttendance} from '../../useViewModel';

interface ContainerSchedulingProps {
  handleDataAttendance: (data: DataAttendance) => void;
}

export default function ContainerScheduling({
  handleDataAttendance,
}: ContainerSchedulingProps) {
  function selectData(data: DataAttendance) {
    return () => {
      handleDataAttendance(data);
    };
  }
  return (
    <S.VStack w="100%" alignItems="flex-start" mt={'5%'} space={5}>
      <S.HStack
        w="100%"
        alignItems="center"
        justifyContent="space-between"
        px={9}
        py={5}>
        <S.Text color="#b5b5b5" fontWeight={500} fontSize="lg">
          August 2022
        </S.Text>

        <S.HStack space={3}>
          <CaretLeft color="#fff" weight="bold" size={20} />
          <CaretRight color="#fff" weight="bold" size={20} />
        </S.HStack>
      </S.HStack>
      <S.Text color="#ddd" fontWeight={500} fontSize="md" px={9}>
        Date
      </S.Text>

      <S.FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        renderItem={() => (
          <CardDay
            onPress={selectData({
              date: '12',
            })}
          />
        )}
      />
      <S.Text color="#ddd" fontWeight={500} fontSize="md" px={9}>
        Time
      </S.Text>
      <S.FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        renderItem={() => (
          <CardTime
            onPress={selectData({
              hour: '12',
            })}
          />
        )}
      />
    </S.VStack>
  );
}
