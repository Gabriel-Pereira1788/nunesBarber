import React from 'react';
import * as S from 'native-base';

interface InputProps extends S.IInputProps {}

export default function Input({...rest}: InputProps) {
  return (
    <S.Input
      backgroundColor="transparent"
      borderWidth={1}
      p={3}
      borderColor="#acabab2c"
      width="100%"
      borderRadius="xl"
      {...rest}
    />
  );
}
