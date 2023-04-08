import React from 'react';
import {AuthDTO, RoleUser} from '../../../common/models/Auth';
import {Errors, SignUpViewModel} from './models';
import {useAuth} from '../../../repositories/firebase/useAuth';
import {ERRORS_MESSAGE} from '../../../common/constants/errorsMessages';
import {alertRef} from '../../../components/Alert/View';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootParamListI} from '../../../routes/navigation';

type Props = {
  navigation: NativeStackNavigationProp<RootParamListI, 'signUp', undefined>;
};

export function useSignUp({navigation}: Props): SignUpViewModel {
  const [loading, setLoading] = React.useState(false);
  const [formData, setformData] = React.useState<AuthDTO>({
    email: '',
    password: '',
    name: '',
  });

  const [errors, setErrors] = React.useState<Errors | null>(null);

  const {signUp} = useAuth();

  function handleFormData(key: keyof AuthDTO, value: string) {
    setformData(prev => ({...prev, [key]: value}));
    if (errors) {
      setErrors(null);
    }
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
        await signUp({
          ...formData,
          role_id: RoleUser.Client,
        });

        navigation.replace('home');
      } catch (error) {
        const Error = error as {message: string};
        console.log(Error.message);
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

  return {formData, errors, loading, handleFormData, onSubmit};
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
