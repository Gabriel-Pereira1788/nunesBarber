import React from 'react';
import * as S from 'native-base';
import {SIZES} from '../../../../../constants/sizes';
import {TouchableOpacity} from 'react-native';
import Assesment from './components/Assessment/View';
type Props = {};

const locationImage =
  'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80';

export default function CardBarberShop({}: Props) {
  return (
    <TouchableOpacity>
      <S.VStack
        shadow={10}
        borderWidth={1}
        borderColor="#4645454d"
        width={SIZES.width / 2 + 20}
        height={SIZES.height / 2.2}
        p={1.5}
        style={{
          elevation: 10,
          borderRadius: 40,
        }}
        space={3}
        backgroundColor="#0c0c0d">
        <S.Image
          style={{
            borderRadius: 40,
          }}
          flex={1}
          minHeight={50}
          source={{uri: locationImage}}
          alt="image-location"
        />

        <Assesment />
        <S.VStack
          flex={0.7}
          alignItems="flex-start"
          justifyContent="flex-start"
          space={1}
          p={1.5}>
          <S.HStack
            w="100%"
            alignItems="center"
            justifyContent="flex-start"
            space={2}>
            <S.Text fontWeight={500} color="#f8932e">
              ABERTO AGORA
            </S.Text>
            <S.Text color="#7d7c7c">9:00 - 22:00</S.Text>
          </S.HStack>

          <S.Text fontWeight={500} color="#fff" fontSize="xl">
            El Nunes
          </S.Text>

          <S.Box
            position="absolute"
            bottom={0}
            alignItems="center"
            justifyContent="center"
            w="100%"
            borderTopWidth={1}
            borderTopColor="#5353532a"
            p={3}>
            <TouchableOpacity>
              <S.Text fontWeight={400} color="#fff" fontSize="lg">
                Agendar Agora
              </S.Text>
            </TouchableOpacity>
          </S.Box>
        </S.VStack>
      </S.VStack>
    </TouchableOpacity>
  );
}
