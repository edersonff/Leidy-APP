import { StyleSheet } from "react-native";
import { colors } from '../../styles/base';
export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',   
        position: 'relative',
        overflow: 'hidden'
    },
    btns_container: {
        height: '40%',
        minWidth: '80%',
        justifyContent: 'space-evenly'
    },
    form_control:{
        height: '80%',
        marginHorizontal: 'auto',
        justifyContent: 'space-between',
    },
    logo_container:{
        position: "absolute",
        top: 0,
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2
    },
    logo_text:{
        color: colors.bg,
        fontSize: 30
    },
    title_verify_pass:{
        fontWeight: 'normal',
        marginBottom: 30,
        marginTop: 30
    },
    input:{
        marginBottom: 20,
        borderBottomColor: '#fff',
        width: '100%',
        height: 70,
    }
})
