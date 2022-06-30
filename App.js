import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Loading from './Screens/Loading/Loading';
import AuthPage from './Screens/AuthPage/AuthPage';
import style from './App.style';
import { createStackNavigator  } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
  Loading: {
    screen: Loading
  },
  AuthPage: {
    screen: AuthPage
  }
},{
  initialRouteName: "AuthPage",
  headerMode: 'none'
});
const AppContainer = createAppContainer(AppNavigator);


export default function App() {
  return (
    <AppContainer/>
  );
}
