import React from 'react';
import * as S from 'native-base';
import Logo from '../../../assets/images/man.png';
import Animated, {FadeInUp} from 'react-native-reanimated';
import {ImageBackground} from 'react-native';
import ProgressBar from '../../../components/ProgressBar/View';
import {NavigationProps} from '../../../routes/navigation';

const backgroundImage =
  'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80';

export default function InitialScreen({
  navigation,
}: NavigationProps<'initial_screen'>) {
  function redirectPage() {
    navigation.replace('home');
  }
  return (
    <ImageBackground
      source={{uri: backgroundImage}}
      style={{flex: 1}}
      blurRadius={8}>
      <S.VStack
        flex={1}
        backgroundColor="rgba(0,0,0,0.8)"
        alignItems="center"
        justifyContent="center"
        space={4}>
        <Animated.View entering={FadeInUp.delay(120).duration(350)}>
          <S.Image source={Logo} alt="ImageLogo" />
        </Animated.View>

        <ProgressBar finishAction={redirectPage} />
      </S.VStack>
    </ImageBackground>
  );
}
