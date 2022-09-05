import React, { useRef } from "react";
import { View, Text, Image } from "react-native";
import styles from "./Login.style";
import Context, { api } from "../../Context";
import Btn from "../../Components/Button";
import { TextInput } from 'react-native-paper';
import { store } from "../../Context/context";
import image from '../../img/Perfil01.png';
import Link from "../../Components/Link/Link";
import TextBox from "../../Components/TextBox";
import { navigate } from '../../Components/Util/navigation';
import Label from "../../Components/Label/Label";
import ImageLoad from "../../Components/ImageLoad/ImageLoad";
let email, password;
export default function AuthPage(props) {
  const context = Context(store);

  async function submitLogin() {
    await api
      .post("user/login", {
        email,
        password
      })
      .then(async (res) => {
        alert(res);
        context.set('SET_TOKEN',res.data.token);
      })
      .catch(function (error) {
        alert(error);
      });
      // props.navigation.navigate('Perfil');
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <ImageLoad style={styles.login_image} source={image} />
      </View>
      <View style={styles.btns_container}>
        <View style={styles.form_control}>
            <Label>Login</Label>
            <TextInput
              mode="outlined"
              color={'white'}
              style={styles.input}
              placeholderTextColor="#bbb"
              theme={{colors: {placeholder: '#bbb'}}}
              secure={false}
              placeholder="Digite seu email"
              name={"Email"}
              underlineColorAndroid="#fff"
              onChangeText={(e) => { email = e }}
            />
            <TextInput
              mode="outlined"
              color={'white'}
              style={styles.input}
              placeholderTextColor="#bbb"
              theme={{colors: {placeholder: '#bbb'}}}
              placeholder="Digite sua senha"
              name={"Senha"}
              onChangeText={(e) => { password = e }}
            />
            <Link align="right" route={'Loading'} style={{marginBottom: 15, paddingHorizontal: 10}}>Esqueci minha senha</Link>
            <Btn
              onPress={() => {
                submitLogin();
              }}
              weight='bold'
              style={{borderRadius: 10}}
              text="Fazer Login"
              color="#9949CA"
              
              fill={true}
            />
            <TextBox size={17} center color="#555" weight="bold" style={{marginVertical: 10}}>Ou</TextBox>
            <Btn
              onPress={() => {
                navigate('Registro');
              }}
              style={{borderRadius: 10}}
              weight='bold'
              text="Cadastro"
              color="#999999"
              
              fill={true}
            />
        </View>
      </View>
    </View>
  );
}
