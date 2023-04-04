import React from 'react';
import * as S from 'native-base';
import {BlurView} from '@react-native-community/blur';
import {globalStyles} from '../../../../../themes/globalStyles';
import {Heart, Star} from 'phosphor-react-native';
interface InfoBarberProps {}

export default function InfoBarber({}: InfoBarberProps) {
  return (
    <S.VStack
      width="100%"
      height={170}
      style={{
        transform: [
          {
            translateY: -110,
          },
        ],
      }}
      borderTopRadius={40}
      overflow="hidden"
      position="absolute"
      backgroundColor="rgba(0,0,0,0.1)">
      <BlurView
        style={globalStyles.blurContainer}
        blurType="dark"
        blurAmount={10}
      />
      <S.VStack padding={5} space={3}>
        <S.HStack alignItems="center" justifyContent="space-between">
          <S.Text fontWeight={500} fontSize="xl" color="#fff">
            Richard Anderson
          </S.Text>
          <Heart size={22} color="#fff" weight="fill" />
        </S.HStack>

        <S.HStack space={2}>
          <Star size={18} color="#eea12f" weight="fill" />
          <S.Text color="#fff" fontWeight={500}>
            4.8 (114)
          </S.Text>

          <S.Text color="#eea12f" bold>
            PRO BARBER
          </S.Text>
        </S.HStack>
      </S.VStack>
    </S.VStack>
  );
}
