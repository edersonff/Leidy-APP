import { passwordStrength } from "check-password-strength";
import { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, View } from "react-native"
import { TextInput, Text } from "react-native-paper";
import Btn from "../../Button"
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from "../../../styles/base";
import Animation from "../../../Helpers/Animation";

const width = [];
export default function PassReturnGroup(){
    const password = useRef(null);
    const [isPasswordSecure, setIsPasswordSecure] = useState(true);
    const [passSecurity, setPassSecurity] = useState(0);
    return(
        <>
            <TextInput
                style={styles.input}
                mode="outlined"
                label="Digite sua senha"
                ref={password}
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
                }}
            />
            <Btn
                onPress={() => { submitRegister() }}
                text="Fazer cadastro"
                color="#9949CA"
                fill={true}
            />
            <View>
            <Text style={styles.title_verify_pass}>Segurança da senha</Text>
            <PassReturn pass={passSecurity} />
            </View>
        </>
    )
}

function PassReturn({pass}) {
    const width = useRef(new Animated.Value(0)).current;

    const changeAnim = (to)=>{
        Animated.timing(
            width,
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
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',   
        position: 'relative',
        overflow: 'hidden'
    },
    form_container:{
        overflow: 'hidden',
        flex: 4,
        backgroundColor: colors.bg,
        bottom: 0,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo_container:{
        top: 0,
        width: '100%',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2
    },
    form:{
        width: '80%',
        height: '100%',
        justifyContent: 'center'
    },
    form_control:{
        width: '100%',
    },
    form_title:{
        fontSize: 30,
        textAlign: "center",
        fontWeight: 'normal',
        textTransform: 'uppercase'
    },
    logo_text:{
        color: colors.bg,
        fontSize: 30
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
    label_container:{
        width: '100%',
    },
    input:{
        marginBottom: 15
    }
});

async function submitRegister() {
    console.log({
      name: name.current,
      email: email.current,
      password: password.current
    });
    // await api
    //   .post("user/register/client", {
    //     name: name.current.value,
    //     email: email.current.value,
    //     password: password.current.value
    //   })
    //   .then((res) => {
    //     console.log(res.data.token)
    //     context.set("SET_TOKEN",res.data.token);
    //   })
      
    // context.apiAuth().delete("auth/user/");
  }