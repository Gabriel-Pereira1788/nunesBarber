import React from 'react';
import * as S from 'native-base';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {BlurView} from '@react-native-community/blur';
type Props = {};

const barberPhoto =
  'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';

export default function CardVisit({}: Props) {
  return (
    <TouchableOpacity>
      <Animated.View entering={FadeInDown.delay(150).duration(200)}>
        <S.HStack
          width="100%"
          backgroundColor="#fafafa"
          padding={2}
          rounded="3xl"
          alignItems="center"
          shadow={12}
          style={{elevation: 10}}
          justifyContent="space-between">
          <S.HStack space={3} alignItems="center">
            <S.Box rounded="3xl" position="relative" overflow="hidden">
              <S.Image
                source={{uri: barberPhoto}}
                width={20}
                height={20}
                alt="image-barber"
                rounded="3xl"
              />
              <S.Box
                bottom={0}
                zIndex={500}
                width="100%"
                position="absolute"
                alignItems="center"
                justifyContent="center"
                height="30%"
                backgroundColor="rgba(0,0,0,0.5)">
                <BlurView
                  style={styles.absolute}
                  blurType="dark"
                  blurAmount={15}
                />
                <S.Text fontWeight={500} color="#eea12f">
                  PRO
                </S.Text>
              </S.Box>
            </S.Box>
            <S.Text fontWeight={500} fontSize="lg" color="#080808">
              Richard Anderson
            </S.Text>
          </S.HStack>

          <S.Button
            backgroundColor="#0c0c0c"
            padding={2.5}
            mr={1}
            _text={{
              fontWeight: 500,
              letterSpacing: 'lg',
            }}
            color="#fff"
            rounded="xl">
            Agendar
          </S.Button>
        </S.HStack>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',

    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});
