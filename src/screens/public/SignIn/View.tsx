import React from 'react';
import * as S from 'native-base';
import Input from '../../../components/Input/View';
import Button from '../../../components/Button/View';
import {ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import WrapperAuthForm from '../../../components/WrapperAuthForm/View';
import {useNavigation} from '@react-navigation/native';

type Props = {};
const backgroundImg =
  'https://images.unsplash.com/photo-1618022325802-7e5e732d97a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=748&q=80';

export default function SignIn({}: Props) {
  const navigation = useNavigation();
  function redirect() {
    navigation.navigate('signUp');
  }

  const redirectToRegister = (
    <S.HStack space={2}>
      <S.Text fontWeight={500} color="#828080">
        Não possui uma conta ?
      </S.Text>
      <TouchableOpacity onPress={redirect}>
        <S.Text bold color="yellow.300">
          Cadastrar-se
        </S.Text>
      </TouchableOpacity>
    </S.HStack>
  );

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
        <WrapperAuthForm RedirectComp={redirectToRegister} title="Entrar">
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Button>Continuar</Button>
        </WrapperAuthForm>
      </S.VStack>
    </ImageBackground>
  );
}
