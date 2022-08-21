import React, { useRef } from "react";
import { View, Pressable, Text } from "react-native";
import styles from "./Login.style";
import Context, { api } from "../../Context";
import { packages } from "../../styles/base";
import Btn from "../../Components/Button";
import { TextInput } from 'react-native-paper';
import { store } from "../../Context/context";
export default function AuthPage(props) {
  const context = Context(store);
  const email = useRef(null);
  const password = useRef(null);

  async function submitLogin() {
    await api
      .post("user/login", {
        email: email.current.value,
        password: password.current.value
      })
      .then(async (res) => {
        context.set('SET_TOKEN',res.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
      props.navigation.navigate('Perfil');
  }

  return (
    <View style={styles.container}>
      <View
        style={styles.logo_container}
      >
        <Text style={styles.logo_text}>{packages.name}</Text>
      </View>
      <View style={styles.btns_container}>
        
      <View style={styles.form_control}>
          <TextInput
            color={'white'}
            style={styles.input}
            secure={false}
            placeholder="Digite seu email"
            useRef={email}
            name={"Email"}
          />
          <TextInput
            color={'white'}
            style={styles.input}
            secure={true}
            placeholder="Digite sua senha"
            name={"Senha"}
            useRef={password}
          />
          <Btn
            onPress={() => {
              submitLogin();
            }}
            text="Fazer Login"
            color="#9949CA"
            fill={true}
          />
        </View>
      </View>
    </View>
  );
}
