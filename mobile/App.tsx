import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { BaiJamjuree_400Regular, BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree';
import blurBg from './src/assets/bg-blur.png';
import Stripes from './src/assets/stripes.svg';
import Logo from './src/assets/logo.svg';
import { styled } from 'nativewind';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { useEffect } from 'react';

const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: 'https://github.com/settings/connections/applications/c1fabe9c528fec528af2',
};
const StyledStripes = styled(Stripes);

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_400Regular,
    BaiJamjuree_700Bold
  });

  const [request, response, signInWithGitHub] = useAuthRequest(
    {
      clientId: 'c1fabe9c528fec528af2',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'nlwspacetime'
      }),
    },
    discovery
  );


  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      console.log(code);
    }
  }, [response]);
  console.log(makeRedirectUri({
    scheme: 'nlwspacetime'
  }),);

  if (!hasLoadedFonts) return (null);
  return (
    <ImageBackground
      source={ blurBg }
      imageStyle={ { position: 'absolute', left: '-100%' } }
      className="flex-1 bg-gray-900 relative ">
      <StyledStripes className='absolute left-2' />

      <View className='flex-1 items-center justify-center gap-6 '>
        <Logo />
        <View className='space-y-2 items-center justify-center px-10'>
          <Text className='text-center font-title text-2xl leading-tight text-gray-50'>Sua cápsula do tempo</Text>
          <Text className='text-center font-body text-base leading-relaxed text-gray-100'>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</Text>
        </View>
        <TouchableOpacity
          onPress={ () => signInWithGitHub() }
          activeOpacity={ 0.7 }
          className='rounded-full bg-green-500 px-5 py-2'
        >
          <Text className='font-alt text-sm uppercase text-black'>Cadastrar Lembrança</Text>

        </TouchableOpacity>
      </View>
      <Text className='text-center font-body text-sm leading-relaxed text-gray-200 py-10' > Feito com 💚 no NLW da Rocketseat</Text>
      <StatusBar style="inverted" translucent />
    </ImageBackground>
  );
}
