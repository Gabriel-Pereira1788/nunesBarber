import React from 'react';
import * as S from 'native-base';
import Header from './components/Header';
import CardVisit from './components/CardVisit/View';
import CardBarberShop from './components/CardBarberShop/View';
type Props = {};

export default function Home({}: Props) {
  return (
    <S.VStack flex={1} backgroundColor="#08090a" alignItems="center">
      <Header />
      <S.VStack flex={1} w="100%" padding={5} space={2}>
        <S.VStack flex={0.8}>
          <S.Text fontSize="4xl" color="#fff">
            Hey,
            <S.Text fontWeight={700} color="#fff">
              Michael
            </S.Text>
          </S.Text>

          <S.Text fontWeight={400} fontSize="md" color="#fff">
            Friday,August 12
          </S.Text>
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
          <CardBarberShop />
        </S.VStack>
      </S.VStack>
    </S.VStack>
  );
}
