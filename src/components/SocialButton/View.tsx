import React from 'react';
import * as S from 'native-base';
import {TouchableOpacity} from 'react-native';
interface SocialButtonProps {
  IconSocial: JSX.Element;
  children: React.ReactNode;
}

export default function SocialButton({
  IconSocial,
  children,
}: SocialButtonProps) {
  return (
    <TouchableOpacity style={{width: '100%'}}>
      <S.HStack
        w="100%"
        borderRadius="lg"
        p={4}
        borderWidth={1}
        borderColor="#dddddd15"
        position="relative"
        alignItems="center"
        justifyContent="center">
        <S.Box position="absolute" left={5}>
          {IconSocial}
        </S.Box>
        <S.Text color="#fff" fontSize="md" fontWeight={500}>
          {children}
        </S.Text>
      </S.HStack>
    </TouchableOpacity>
  );
}
