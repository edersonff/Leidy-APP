import { ActivityIndicator, View } from 'react-native';
import Perfil from './Screens/Perfil/Perfil';
import Loading from './Screens/Loading/Loading';
import AuthPage from './Screens/AuthPage/AuthPage';
import Dashboard from './Screens/Dashboard/Dashboard';
import SystemMessage from './Screens/SystemMessage/SystemMessage';
import style from './App.style';
import { createStackNavigator  } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import {createStore} from 'redux';
import reducers from './Context/index'
import { Provider } from 'react-redux';

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
);

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer style={style.app_container}>
        <Stack.Navigator
          initialRouteName='AuthPage'
          screenOptions={{
            headerShown: false,
            animationEnabled: true,
          }}>

          <Stack.Screen name="Loading" component={Loading} options={{ gestureDirection: 'horizontal' }} />

          <Stack.Screen name="AuthPage" component={AuthPage} />
          
          <Stack.Screen name="SystemMessage" component={SystemMessage} />
          
          <Stack.Group 
          screenOptions={{
            animationEnabled: false
          }}>
              <Stack.Screen name="Dashboard" component={Dashboard} />
              <Stack.Screen name="Perfil" component={Perfil} />
          </Stack.Group>

        </Stack.Navigator>
        <StatusBar/>
        {/* <ActivityIndicator size={70} style={style.Loading}/> */}
      </NavigationContainer>
    </Provider>
  );
}
