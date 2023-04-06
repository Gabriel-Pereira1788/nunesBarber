import {AuthDTO} from '../../../models/Auth';
export type Errors = {
  [name in keyof AuthDTO]: string;
};

export interface SignInViewModel {
  formData: AuthDTO;
  errors: Errors | null;
  loading: boolean;
  handleFormData: (key: keyof AuthDTO, value: string) => void;
  onSubmit: () => Promise<void>;
  redirect: () => void;
}
