import React from 'react';
import * as S from 'native-base';
import Logo from '../../../assets/images/man.png';
import Animated, {FadeInUp} from 'react-native-reanimated';
import {ImageBackground} from 'react-native';
type Props = {};

const backgroundImage =
  'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80';

export default function InitialScreen({}: Props) {
  const [visible, setVisible] = React.useState(false);
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
        {visible && (
          <Animated.View entering={FadeInUp.delay(120).duration(350)}>
            <S.Image source={Logo} alt="ImageLogo" />
          </Animated.View>
        )}

        <S.Button
          position="absolute"
          bottom={5}
          width={'90%'}
          onPress={() => setVisible(!visible)}
          borderRadius={20}
          backgroundColor="#2a2929"
          shadow={10}
          padding={5}
          _text={{
            fontSize: 'xl',
          }}>
          Mudar visual
        </S.Button>
      </S.VStack>
    </ImageBackground>
  );
}
