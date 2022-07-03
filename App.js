import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Loading from './Screens/Loading/Loading';
import AuthPage from './Screens/AuthPage/AuthPage';
import SystemMessage from './Screens/SystemMessage/SystemMessage';
import style from './App.style';
import { createStackNavigator  } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={style.app_container}>
      <Stack.Navigator
        initialRouteName='SystemMessage'
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Loading" component={Loading} options={{ gestureDirection: 'horizontal' }} />

        <Stack.Screen name="AuthPage" component={AuthPage} />
        
        <Stack.Screen name="SystemMessage" component={SystemMessage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
