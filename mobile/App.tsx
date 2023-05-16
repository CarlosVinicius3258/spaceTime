import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 bg-gray-950 justify-center items-center">
      <Text className="text-zinc-200 text-5xl font-bold">Hello Woaarld!</Text>
      <StatusBar style="inverted" translucent />
    </View>
  );
}
