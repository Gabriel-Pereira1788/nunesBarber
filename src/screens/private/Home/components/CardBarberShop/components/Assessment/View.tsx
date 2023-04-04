import React from 'react';
import * as S from 'native-base';
import {BlurView} from '@react-native-community/blur';
import {StyleSheet} from 'react-native';
type Props = {};

export default function Assesment({}: Props) {
  return (
    <S.HStack
      borderRadius="2xl"
      position="absolute"
      p={2}
      top={5}
      left={5}
      overflow="hidden">
      <BlurView style={styles.absolute} blurType="dark" blurAmount={7} />
      <S.Text fontWeight={500} fontSize="xs" color="#ffffffeb">
        4.9(179)
      </S.Text>
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
