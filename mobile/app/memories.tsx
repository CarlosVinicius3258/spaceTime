import { View, TouchableOpacity, ScrollView } from 'react-native';
import Logo from '../src/assets/logo.svg';
import { Link, useRouter } from 'expo-router';
import Icon from '@expo/vector-icons/Feather';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as SecureStore from 'expo-secure-store';

export default function Memories() {
  const { bottom, top } = useSafeAreaInsets();
  const router = useRouter();
  function handleSignOut() {
    SecureStore.deleteItemAsync('gh.token');
    router.push('/');
  }

  return (
    <ScrollView className='flex-1 px-8 ' contentContainerStyle={
      { paddingBottom: bottom, paddingTop: top }
    }>
      <View className='flex-row mt-4 items-center justify-between'>
        <Logo />
        <View className='flex-row gap-2'>
          <Link href='/new' asChild>
            <TouchableOpacity className='h-10 w-10 items-center justify-center rounded-full bg-green-500'>
              <Icon name='plus' size={ 16 } color={ '#111' } />
            </TouchableOpacity>

          </Link>

          <TouchableOpacity onPress={ handleSignOut } className='h-10 w-10 items-center justify-center rounded-full bg-red-500'>
            <Icon name='log-out' size={ 16 } color={ '#111' } />
          </TouchableOpacity>


        </View>

      </View>



    </ScrollView>
  );
}