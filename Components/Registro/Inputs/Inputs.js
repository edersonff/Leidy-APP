import { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../../../styles/base";
import PassReturnGroup from "../PassReturn/PassReturn";
const width = [];
export default function Inputs(){
    const name = useRef(null);
    const email = useRef(null);
    return(
      <View style={styles.form_control}>
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Digite seu nome"
          ref={name}
        />
        <TextInput
          style={styles.input}
          autoComplete="email"
          mode="outlined"
          label="Digite seu email"
          ref={email}
        />
        <PassReturnGroup />
      </View>
    )
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
        marginRight: 10
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
