import { styled } from 'nativewind';
import { ImageBackground, Text } from 'react-native';
import blurBg from '../src/assets/bg-blur.png';
import Stripes from '../src/assets/stripes.svg';
import { useFonts } from 'expo-font';
import { BaiJamjuree_400Regular, BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { SplashScreen, Stack } from 'expo-router';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

const StyledStripes = styled(Stripes);
export default function Layout() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_400Regular,
    BaiJamjuree_700Bold
  });
  if (!hasLoadedFonts) return <SplashScreen />;
  return (
    <ImageBackground
      source={ blurBg }
      imageStyle={ { position: 'absolute', left: '-100%' } }
      className="flex-1 bg-gray-900 relative ">
      <StyledStripes className='absolute left-2' />
      <Stack screenOptions={ {
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent'
        }
      } } />
      <Text className='text-center font-body text-sm leading-relaxed text-gray-200 py-10' > Feito com 💚 no NLW da Rocketseat</Text>
      <StatusBar style="inverted" translucent />

    </ImageBackground>
  );
}