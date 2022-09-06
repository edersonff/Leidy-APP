import { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import Btn from "../../Button";
import Ionicons from '@expo/vector-icons/Ionicons';
import { passwordStrength } from "check-password-strength";
import { api } from "../../../Context";
let name, email, password;    
export default function Inputs({ error }){
    const [isPasswordSecure, setIsPasswordSecure] = useState(true);
    const [passSecurity, setPassSecurity] = useState(0);
    return(
      <View style={styles.form_control}>
        <TextInput  
        //   theme={{ colors: { primary: 'green',underlineColor:'transparent',}}}
          style={styles.input}
          mode="outlined"
          label="Digite seu nome"
          placeholderTextColor="#bbb"
          theme={{colors: {placeholder: '#bbb'}}}
          onChangeText={(e)=>{
            name = e;
          }}
        />
        <TextInput
          style={styles.input}
          autoComplete="email"
          mode="outlined"
          label="Digite seu email"
          placeholderTextColor="#bbb"
          theme={{colors: {placeholder: '#bbb'}}}
          onChangeText={(e)=>{
            email = e;
          }}
        />
        <TextInput
            style={styles.input}
            mode="outlined"
            label="Digite sua senha"
            secureTextEntry={isPasswordSecure}
            placeholderTextColor="#bbb"
            theme={{colors: {placeholder: '#bbb'}}}
            right={
                <TextInput.Icon
                style={{marginRight: 30}}
                name={() => <Ionicons name={isPasswordSecure ? "eye-off-outline" : "eye-outline"} size={25} color={"rgb(50,50,50)"} />}
                onPress={() => { isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true) }}
                />
            }
            onChangeText={(e) => {
                password = e;
                setPassSecurity(passwordStrength(e).id);
            }}
        />
        <Btn
          weight={'bold'}
          onPress={async() => { console.log(await submitRegister()) }}
          text="Fazer cadastro"
          color="#9949CA"
          fill={true}
        />
        <View>
            <Text style={styles.title_verify_pass}>Segurança da senha</Text>
            <PassReturn pass={passSecurity} />
        </View>
      </View>
    )
}
function PassReturn({pass}) {
    const scaling = useRef(new Animated.Value(0)).current;

    const changeAnim = (to)=>{
        Animated.timing(
            scaling,
            {
              toValue: to*75,
              duration: 700,
              useNativeDriver: true,
            }
          ).start();
    }

    useEffect(() => {
        changeAnim(pass ? pass : 0);
    }, [pass]);

    return (
        <View style={styles.container_verify_pass}>
            <View style={[styles.verify_pass, styles.pass_empty]} />
            <View style={[styles.verify_pass, styles.pass_empty]} />
            <View style={[styles.verify_pass, styles.pass_empty]} />
            
            <Animated.View
                style={[
                    styles.verify_pass,
                    styles.pass_fill,
                    { scaleX: scaling }
                ]}
            />
        </View>
    );
}

async function submitRegister() {
    await api
      .post("user/register", {
        name,password,email
      })
      .then((res) => {
        context.set("SET_TOKEN",res.data.token);
        context.apiAuth().delete("auth/user/");
      }).catch((err) => {
        return 'Falha ao cadastrar';
    })
    return null;
      
  }

const styles = StyleSheet.create({
    form_control:{
        width: '100%',
    },
    input:{
      marginBottom: 10,
      backgroundColor: '#fff',
      fontSize: 18,
      width: '100%',
      height: 60,
    },
    verify_pass:{
        width: 65,
        height: 5,
        marginRight: 10,
        overflow: 'hidden'
    },
    pass_fill:{
        backgroundColor: '#32cd32',
        position: 'absolute',
        width: '100%'
    },
    pass_empty:{
        position: 'relative',
        backgroundColor: 'gray',
        overflow: 'hidden',
        borderRadius: 3,
    },
    container_verify_pass:{
        flexDirection: 'row',
        overflow: 'hidden'
    },
    title_verify_pass:{
        fontWeight: 'normal',
        marginVertical: 15,
    },
});
