import { SafeAreaView, View, Platform, StatusBar } from 'react-native';
import style from './App.style';

import { createStackNavigator  } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar as Statusbar } from 'expo-status-bar';

import {createStore} from 'redux';
import reducers from './Context/reducer'
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';

import Perfil from './Screens/Perfil/Perfil';
import Loading from './Screens/Loading/Loading';
import Registro from './Screens/Registro/Registro';
import Login from './Screens/Login/Login';
import Dashboard from './Screens/Dashboard/Dashboard';
import SystemMessage from './Screens/SystemMessage/SystemMessage';
import Pedidos from './Screens/Pedidos/Pedidos';
import Pedido from './Screens/Pedido/Pedido';
import Busca from './Screens/Busca/Busca';
import Context from "./Context";
import { useContext } from 'react';
import { useEffect } from 'react';
import PedidoCreate from './Screens/Pedido/create/PedidoCreate';
import { navigationRef } from './Components/Util/navigation';
export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
);

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const Stack = createStackNavigator();
export default function App() {
  const context = Context(store);
  const value = useContext(context)
  context.set('ACTIVE_LOADING');
  setTimeout(async ()=>{
    context.set('DISABLE_LOADING');
  },1000)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PaperProvider>
        <Provider store={store}>
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
              initialRouteName='Dashboard'
              screenOptions={{
                headerShown: false,
                animationEnabled: true,
              }}>
                <Stack.Screen name="Loading" component={Loading} options={{ gestureDirection: 'horizontal' }} />
                <Stack.Screen name="Registro" component={Registro} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SystemMessage" component={SystemMessage} />
              <Stack.Group 
              screenOptions={{
                animationEnabled: false
              }}>
                  <Stack.Screen name="Dashboard" component={Dashboard} />
                  <Stack.Screen name="Perfil" component={Perfil} />
                  <Stack.Screen name="Pedidos" component={Pedidos} />
                  <Stack.Screen name="Busca" component={Busca} />
              </Stack.Group>
              
              <Stack.Group 
              screenOptions={{
                animationEnabled: true,
                transitionSpec: {
                  open: config,
                  close: config,
                },            
              }}>
                <Stack.Screen name="Pedido" component={Pedido} />
                <Stack.Screen name="PedidoCreate" component={PedidoCreate} />
              </Stack.Group>
            </Stack.Navigator>
            <Statusbar/>
            {/* { context.get('loading', 'value') ? ( <ActivityIndicator size={70} style={style.Loading}/> ) : (<></>) } */}
          </NavigationContainer>
        </Provider>
      </PaperProvider>
    </SafeAreaView>
  );
}
