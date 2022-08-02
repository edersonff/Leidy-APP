import React, { useEffect, useRef } from "react";
import useState from "react-usestateref";
import { Text, View, Pressable, Animated } from "react-native";
import { packages } from "../../styles/base";
import Btn from "../../Components/Button";
import styles from "./Registro.style";
import { passwordStrength } from "check-password-strength";
import Animation from "../../Helpers/Animation";
import { store } from "../../App";
import Context, { api } from "../../Context";
import { TextInput } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';

const width = [];
export default function AuthPage() {
  const context = Context(store);
  const { innerHeight } = window;
  const [passSecurity, setPassSecurity, passSecurityRef] = useState(0);
  const [bottomAnimRegister, setbottomAnimRegister] = useState(false);
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const name = useRef('');
  const email = useRef('');
  const password = useRef('');

  const bottomReg = Animation(-innerHeight * 0.7, 0, 250);
  bottomReg.setValue(0);

  useEffect(() => {
    bottomReg.setValue(bottomAnimRegister ? 0 : -innerHeight * 0.7);
  }, [bottomAnimRegister]);

  function PassReturn({ id }) {
    width[id - 1] = width[id - 1] ? width[id - 1] : Animation(0, 65, 250);

    useEffect(() => {
      setTimeout(() => {
        width[id - 1].setValue(passSecurity >= id ? 65 : 0);
      }, 250 * (passSecurity - passSecurityRef.current - id));
    }, [passSecurity]);


    return (
      <View style={[styles.verify_pass, styles.pass_empty]}>
        <Animated.View
          style={[
            styles.verify_pass,
            styles.pass_fill,
            { width: width[id - 1].anim },
          ]}
        />
      </View>
    );
  }

  async function submitRegister() {
    await api
      .post("user/register/client", {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value
      })
      .then((res) => {
        context.setToken(res.data.token);
      })
      
    context.apiAuth().delete("auth/user/");
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          if (bottomAnimRegister) setbottomAnimRegister(false);
        }}
        style={styles.logo_container}
      >
        <Text style={styles.logo_text}>{packages.name}</Text>
      </Pressable>
      <View style={styles.btns_container}>
        <Btn
          text="Sou ... "
          onPress={() => {
            if (!bottomAnimRegister) setbottomAnimRegister(true);
          }}
        />
        <Btn
          text={"Sou ... "}
          onPress={() => {
            if (!bottomAnimRegister) setbottomAnimRegister(true);
          }}
        />
      </View>
      <Animated.View style={[styles.form, { bottom: bottomReg.anim }]}>
        <View style={styles.form_control}>
          <TextInput
            mode="outlined"
            label="Digite seu nome"
            useRef={name}
            name={"Nome"}
          />
          <TextInput
            mode="outlined"
            label="Digite seu email"
            useRef={email}
            name={"Email"}
          />
          <TextInput
            mode="outlined"
            label="Digite sua senha"
            name={"Senha"}
            useRef={password}
            password={true}
            secureTextEntry={isPasswordSecure}
            right={
              <TextInput.Icon
                style={{marginRight: 30}}
                name={() => <Ionicons name={isPasswordSecure ? "eye-off-outline" : "eye-outline"} size={25} color={"rgb(50,50,50)"} />}
                onPress={() => { isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true) }}
              />
            }
            onChange={(e) => {
              setPassSecurity(passwordStrength(e.target.value).id);
              console.log(e.target.value);
            }}
          />
          <Btn
            onPress={() => {
              submitRegister();
            }}
            text="Fazer cadastro"
            color="#9949CA"
            fill={true}
          />
          <View>
            <Text style={styles.title_verify_pass}>Segurança da senha</Text>
            <View style={styles.container_verify_pass}>
              <PassReturn id={1} />
              <PassReturn id={2} />
              <PassReturn id={3} />
            </View>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}
