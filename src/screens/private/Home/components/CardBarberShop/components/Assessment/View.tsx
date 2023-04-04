import React from 'react';
import * as S from 'native-base';
import {BlurView} from '@react-native-community/blur';
import {StyleSheet} from 'react-native';
import {Star} from 'phosphor-react-native';
type Props = {};

export default function Assesment({}: Props) {
  return (
    <S.HStack
      borderRadius="xl"
      position="absolute"
      px={2}
      py={2.5}
      top={5}
      left={5}
      overflow="hidden">
      <BlurView style={styles.absolute} blurType="dark" blurAmount={7} />
      <S.HStack alignItems="center" space={1}>
        <Star size={18} color="#eea12f" weight="fill" />

        <S.Text fontWeight={500} fontSize="xs" color="#ffffffeb">
          4.9 (179)
        </S.Text>
      </S.HStack>
    </S.HStack>
  );
}

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',

    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});
