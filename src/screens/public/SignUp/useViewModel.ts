import React from 'react';
import {AuthDTO} from '../../../models/Auth';
import {Errors, SignUpViewModel} from './models';
import {useAuth} from '../../../repositories/firebase/useAuth';

export function useSignUp(): SignUpViewModel {
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
        await signUp(formData);
      } catch (error) {
        console.log('error', error);
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
