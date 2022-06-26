import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Loading from './Screens/Loading/Loading';
import style from './App.style';

export default function App() {
  return (
    <View style={style.app_container}>
      <Loading />
      <StatusBar style="auto" />
    </View>
  );
}
