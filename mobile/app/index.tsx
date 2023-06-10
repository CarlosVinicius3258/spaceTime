import { Text, TouchableOpacity, View } from 'react-native';
import Stripes from '../src/assets/stripes.svg';
import Logo from '../src/assets/logo.svg';
import { styled } from 'nativewind';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { useEffect } from 'react';
import { api } from '../src/lib/api';
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';

const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: 'https://github.com/settings/connections/applications/c1fabe9c528fec528af2',
};
const StyledStripes = styled(Stripes);

export default function App() {
  const router = useRouter();


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

  const handleGithubOauthCode = async (code: string) => {
    const response = await api.post('/register', {
      code
    });

    const { token } = response.data;

    await SecureStore.setItemAsync('gh.token', token);
    router.push('/new');

  };



  useEffect(() => {

    if (response?.type === 'success') {
      const { code } = response.params;
      console.log("🚀 ~ file: index.tsx:60 ~ useEffect ~ code:", code);


      (async () => {

        await handleGithubOauthCode(code);
      })();
    }
  }, [response]);


  return (
    <View
      className="flex-1 ">


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


    </View>
  );
}
