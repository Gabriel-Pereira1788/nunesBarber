import React from 'react';
import * as S from 'native-base';
import Logo from '../../../common/assets/images/man.png';
import InitialBackground from '../../../common/assets/images/initial_background.jpg';
import Animated, {FadeInUp} from 'react-native-reanimated';
import {ImageBackground} from 'react-native';
import ProgressBar from '../../../components/ProgressBar/View';
import {NavigationProps} from '../../../routes/navigation';
import {useInitialScreen} from './useInitialScreen';

export default function InitialScreen({
  navigation,
}: NavigationProps<'initial_screen'>) {
  const {redirectPage} = useInitialScreen({navigation});
  return (
    <ImageBackground
      testID="image-background"
      source={InitialBackground}
      style={{flex: 1}}
      blurRadius={8}>
      <S.VStack
        flex={1}
        backgroundColor="rgba(0,0,0,0.8)"
        alignItems="center"
        justifyContent="center"
        space={4}>
        <Animated.View entering={FadeInUp.delay(120).duration(350)}>
          <S.Image testID="image-logo" source={Logo} alt="ImageLogo" />
        </Animated.View>

        <ProgressBar finishAction={redirectPage} />
      </S.VStack>
    </ImageBackground>
  );
}
