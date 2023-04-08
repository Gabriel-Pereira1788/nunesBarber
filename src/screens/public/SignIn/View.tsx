import React from 'react';
import * as S from 'native-base';
import Input from '../../../components/Input/View';
import Button from '../../../components/Button/View';
import {ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import WrapperAuthForm from '../../../components/WrapperAuthForm/View';
import InputPassword from '../../../components/Input/components/InputPassword';
import {useSignIn} from './useViewModel';
import Alert from '../../../components/Alert/View';
import {NavigationProps} from '../../../routes/navigation';

const backgroundImg =
  'https://images.unsplash.com/photo-1618022325802-7e5e732d97a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=748&q=80';

export default function SignIn({navigation}: NavigationProps<'signIn'>) {
  const {formData, errors, loading, redirect, handleFormData, onSubmit} =
    useSignIn({navigation});

  const redirectToRegister = (
    <S.HStack space={2}>
      <S.Text fontWeight={500} color="#828080">
        Não possui uma conta ?
      </S.Text>
      <TouchableOpacity testID="register" onPress={redirect}>
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
          <Input
            placeholder="Email"
            value={formData.email}
            error={errors?.email}
            onChangeText={value => handleFormData('email', value)}
          />
          <InputPassword
            placeholder="Senha"
            value={formData.password}
            error={errors?.password}
            onChangeText={value => handleFormData('password', value)}
          />
          <Button isLoading={loading} onPress={onSubmit}>
            Continuar
          </Button>
        </WrapperAuthForm>
        <Alert />
      </S.VStack>
    </ImageBackground>
  );
}
