import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { BaiJamjuree_400Regular, BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree';

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_400Regular,
    BaiJamjuree_700Bold
  });

  if (!hasLoadedFonts) return (null);
  return (
    <View className="flex-1 bg-gray-900 justify-center items-center">
      <Text className="font-alt text-gray-50 text-5xl ">Rocketseat</Text>
      <StatusBar style="inverted" translucent />
    </View>
  );
}
