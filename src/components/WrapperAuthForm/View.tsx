import React from 'react';
import * as S from 'native-base';
import GoogleLogo from '../../common/assets/images/google.png';
import SocialButton from '../SocialButton/View';
import Animated, {FadeInLeft} from 'react-native-reanimated';
interface WrapperAuthFormProps {
  children: React.ReactNode;
  RedirectComp?: JSX.Element;
  title: string;
}

export default function WrapperAuthForm({
  title,
  children,
  RedirectComp,
}: WrapperAuthFormProps) {
  const LogoIcon = (
    <S.Image source={GoogleLogo} width={7} height={7} alt="google-logo" />
  );
  return (
    <S.VStack w="100%" space={5} p={5} borderRadius="lg" overflow="hidden">
      <Animated.View entering={FadeInLeft.delay(200).duration(250)}>
        <S.Text fontWeight={500} color="#e5e5e5" fontSize="4xl">
          {title}
        </S.Text>
      </Animated.View>
      <S.VStack w="100%" space={3}>
        {children}
      </S.VStack>
      <S.Box height={0.5} width="100%" backgroundColor="#dddddd18" />

      <SocialButton IconSocial={LogoIcon}>Continuar com o google</SocialButton>

      {RedirectComp && RedirectComp}
    </S.VStack>
  );
}
