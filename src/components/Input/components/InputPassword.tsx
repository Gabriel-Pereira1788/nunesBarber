import React from 'react';
import Input, {InputProps} from '../View';
import {Eye, EyeSlash} from 'phosphor-react-native';
import {useVisible} from '../../../hooks/useVisible';
import {TouchableOpacity} from 'react-native';
import RenderIF from '../../RenderIF/View';

export default function InputPassword({...rest}: InputProps) {
  const {visible, toggleVisible} = useVisible();

  const EyeIcon = (
    <TouchableOpacity style={{marginEnd: 10}} onPress={toggleVisible}>
      <RenderIF
        condition={visible}
        AlternativeComponent={<EyeSlash size={25} color="#ddd" />}>
        <Eye size={25} color="#ddd" />
      </RenderIF>
    </TouchableOpacity>
  );

  return (
    <Input
      {...rest}
      type={visible ? 'text' : 'password'}
      rightElement={EyeIcon}
    />
  );
}
