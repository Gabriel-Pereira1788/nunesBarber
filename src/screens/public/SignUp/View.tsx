import React from 'react';
import * as S from 'native-base';
import {ImageBackground} from 'react-native';
import WrapperAuthForm from '../../../components/WrapperAuthForm/View';
import Input from '../../../components/Input/View';
import Button from '../../../components/Button/View';

type Props = {};
const backgroundImg =
  'https://images.unsplash.com/photo-1618022325802-7e5e732d97a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=748&q=80';

export default function SignUp({}: Props) {
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
        <WrapperAuthForm title="Cadastar">
          <Input placeholder="Nome" />
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Button>Confirmar</Button>
        </WrapperAuthForm>
      </S.VStack>
    </ImageBackground>
  );
}
