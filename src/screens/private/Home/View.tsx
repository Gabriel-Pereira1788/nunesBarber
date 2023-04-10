import React from 'react';
import * as S from 'native-base';
import Header from './components/Header';
import CardVisit from './components/CardVisit/View';
import CardBarberShop from './components/CardBarberShop/View';
import {NavigationProps} from '../../../routes/navigation';

import Animated, {FadeIn} from 'react-native-reanimated';
import {useHome} from './useHome';
import RenderIF from '../../../components/RenderIF/View';

export default function Home({}: NavigationProps<'home'>) {
  const {username, isFocused, formatedDate, redirectScreen} = useHome();
  return (
    <S.ScrollView
      flex={1}
      showsVerticalScrollIndicator={false}
      backgroundColor="#08090a">
      <RenderIF condition={isFocused}>
        <S.VStack flex={1} backgroundColor="#08090a" alignItems="center">
          <Header />
          <S.VStack flex={1} w="100%" padding={5} space={4}>
            <S.VStack flex={0.8}>
              <Animated.View entering={FadeIn.delay(250).duration(250)}>
                <S.Text fontSize="4xl" color="#fff">
                  Olá,
                  <S.Text
                    textTransform="capitalize"
                    fontWeight={700}
                    color="#fff">
                    {username}
                  </S.Text>
                </S.Text>
                <S.Text fontWeight={400} fontSize="md" color="#fff">
                  {formatedDate}
                </S.Text>
              </Animated.View>
            </S.VStack>

            <S.Text
              textTransform="uppercase"
              fontWeight={500}
              fontSize="md"
              color="#a39f9f">
              Ultima visita
            </S.Text>

            <CardVisit />

            <S.VStack flex={3} space={2}>
              <S.Text
                textTransform="uppercase"
                fontWeight={500}
                fontSize="md"
                color="#a39f9f">
                Barbearias
              </S.Text>
              <CardBarberShop onPress={redirectScreen} />
            </S.VStack>
          </S.VStack>
        </S.VStack>
      </RenderIF>
    </S.ScrollView>
  );
}
