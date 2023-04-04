import React from 'react';
import * as S from 'native-base';
type Props = {};

export default function CardTime({}: Props) {
  return (
    <S.HStack
      alignItems="center"
      justifyContent="center"
      backgroundColor="#16161d"
      shadow={10}
      mx={1}
      style={{
        elevation: 10,
      }}
      w={'24'}
      px={5}
      py={3}
      borderWidth={1}
      borderColor="#4645454d"
      borderRadius={'2xl'}>
      <S.Text fontWeight={300} color="#b5b5b5">
        11:30
      </S.Text>
    </S.HStack>
  );
}
