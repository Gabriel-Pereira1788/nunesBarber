import React from 'react';
import {AuthDTO} from '../../../common/models/Auth';
import {Errors, SignInViewModel} from './models';
import {useAuth} from '../../../repositories/firebase/useAuth';
import {ERRORS_MESSAGE} from '../../../common/constants/errorsMessages';
import {alertRef} from '../../../components/Alert/View';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootParamListI} from '../../../routes/navigation';

type Props = {
  navigation: NativeStackNavigationProp<RootParamListI, 'signIn', undefined>;
};

export function useSignIn({navigation}: Props): SignInViewModel {
  const [loading, setLoading] = React.useState(false);
  const [formData, setformData] = React.useState<AuthDTO>({
    email: '',
    password: '',
  });

  const [errors, setErrors] = React.useState<Errors | null>(null);

  const {signIn} = useAuth();

  function handleFormData(key: keyof AuthDTO, value: string) {
    setformData(prev => ({...prev, [key]: value}));
    if (errors) {
      setErrors(null);
    }
  }
  function redirect() {
    navigation.navigate('signUp');
  }

  async function onSubmit() {
    const haveErrors = validationFields(formData);
    setErrors(haveErrors);
    if (!!haveErrors === false) {
      setLoading(true);
      try {
        if (alertRef.current?.isOpen) {
          alertRef.current.hide();
        }
        await signIn(formData);
        navigation.replace('home');
      } catch (error) {
        const Error = error as {message: string};
        let messageError = '';
        Object.entries(ERRORS_MESSAGE).forEach(([key, value]) => {
          if (Error.message.includes(key)) {
            messageError = value;
          }
        });

        alertRef.current?.open({
          isOpen: true,
          text: messageError,
          status: 'error',
        });
      } finally {
        setLoading(false);
      }
    }
  }

  return {formData, errors, loading, handleFormData, onSubmit, redirect};
}

function validationFields(formData: AuthDTO) {
  let errors = {} as Errors;

  Object.entries(formData).forEach(([key, value]) => {
    if (value.trim() === '') {
      errors[key as keyof Errors] = 'Campo vazio';
    }
  });

  return Object.values(errors).length > 0 ? errors : null;
}
