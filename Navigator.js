import { createStackNavigator  } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar as Statusbar } from 'expo-status-bar';

import Perfil from './Screens/Perfil/Perfil';
import Loading from './Screens/Loading/Loading';
import Registro from './Screens/Registro/Registro';
import Login from './Screens/Login/Login';
import Dashboard from './Screens/Dashboard/Dashboard';
import SystemMessage from './Screens/SystemMessage/SystemMessage';
import Pedidos from './Screens/Pedidos/Pedidos';
import Pedido from './Screens/Pedido/Pedido';
import Busca from './Screens/Busca/Busca';
import PedidoCreate from './Screens/Pedido/create/PedidoCreate';
import { navigationRef } from './Components/Util/navigation';
import PedidoBought from './Screens/Pedido/bought/PedidoBought';
import Chat from "./Screens/Chat/Chat";

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
export default function Navigator() {
  return (
    <NavigationContainer ref={navigationRef}>
    <Stack.Navigator
        initialRouteName='Pedido'
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
        <Stack.Screen name="PedidoBought" component={PedidoBought} />
        <Stack.Screen name="Chat" component={Chat} />
        </Stack.Group>
    </Stack.Navigator>
    <Statusbar/>
    </NavigationContainer>
  );
}
