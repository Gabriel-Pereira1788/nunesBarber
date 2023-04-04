import React from 'react';
import * as S from 'native-base';
type Props = {};

export default function CardDay({}: Props) {
  return (
    <S.VStack
      alignItems="center"
      justifyContent="center"
      backgroundColor="#16161d"
      shadow={10}
      mx={2}
      style={{
        elevation: 10,
      }}
      w={20}
      p={5}
      borderWidth={1}
      borderColor="#4645454d"
      borderRadius={'3xl'}
      space={3}>
      <S.Text fontWeight={500} fontSize="xl" color="#b5b5b5">
        12
      </S.Text>
      <S.Text fontWeight={300} color="#b5b5b5">
        FRI
      </S.Text>
    </S.VStack>
  );
}
