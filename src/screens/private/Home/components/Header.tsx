import React from 'react';
import * as S from 'native-base';
type Props = {};

export default function Header({}: Props) {
  return (
    <S.HStack
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      padding={10}>
      <S.Text color="#fff" fontSize="xl" fontWeight={400}>
        BLACKBLOX
      </S.Text>
    </S.HStack>
  );
}
