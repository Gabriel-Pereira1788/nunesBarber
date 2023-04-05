import React from 'react';
import * as S from 'native-base';
interface ButtonProps extends S.IButtonProps {}

export default function Button({...rest}: ButtonProps) {
  return (
    <S.Button
      _pressed={{
        opacity: 0.8,
      }}
      w="100%"
      backgroundColor="yellow.300"
      p={4}
      borderRadius="lg"
      color="#fff"
      _text={{
        fontWeight: 500,
        fontSize: 'md',
      }}
      {...rest}
    />
  );
}
