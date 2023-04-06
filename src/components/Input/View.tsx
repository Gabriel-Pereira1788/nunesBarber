import React from 'react';
import * as S from 'native-base';
import RenderIF from '../RenderIF/View';

export interface InputProps extends S.IInputProps {
  error?: string;
}

export default function Input({error, ...rest}: InputProps) {
  return (
    <S.VStack
      w="100%"
      alignItems="flex-start"
      justifyContent="center"
      space={2}>
      <S.Input
        backgroundColor="transparent"
        borderWidth={1}
        p={3}
        color="#fff"
        borderColor={error ? 'red.400' : '#acabab2c'}
        width="100%"
        borderRadius="xl"
        {...rest}
      />
      <RenderIF condition={!!error}>
        <S.Text px={2} color="red.400" fontWeight={500} fontSize="sm">
          {error}
        </S.Text>
      </RenderIF>
    </S.VStack>
  );
}
