import React from 'react';
import * as S from 'native-base';
import Input from '../../../components/Input/View';
import Button from '../../../components/Button/View';
import GoogleLogo from '../../../assets/images/google.png';
import SocialButton from '../../../components/SocialButton/View';
import {ImageBackground} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {globalStyles} from '../../../themes/globalStyles';
type Props = {};
const backgroundImg =
  'https://images.unsplash.com/photo-1618022325802-7e5e732d97a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=748&q=80';
export default function SignIn({}: Props) {
  return (
    <ImageBackground
      source={{uri: backgroundImg}}
      style={{flex: 1}}
      blurRadius={9}>
      <S.VStack
        p={3}
        flex={1}
        alignItems="center"
        justifyContent="center"
        backgroundColor="rgba(0,0,0,0.7)"
        position="relative">
        <S.VStack w="100%" space={5} p={5} borderRadius="lg" overflow="hidden">
          <S.VStack w="100%" space={3}>
            <Input placeholder="Email" />
            <Input placeholder="Senha" />
            <Button>Continuar</Button>
          </S.VStack>
          <S.Box height={0.5} width="100%" backgroundColor="#dddddd18" />

          <SocialButton
            IconSocial={() => (
              <S.Image
                source={GoogleLogo}
                width={7}
                height={7}
                alt="google-logo"
              />
            )}>
            Continuar com o google
          </SocialButton>
        </S.VStack>
      </S.VStack>
    </ImageBackground>
  );
}
