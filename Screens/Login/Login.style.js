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
    form:{
        height: '70%',
        backgroundColor: colors.bg,
        position: 'absolute',
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    form_control:{
        width: '90%',
        height: '80%',
        marginHorizontal: 'auto',
        justifyContent: 'space-between'
    },
    form_title:{
        fontSize: 30,
        textAlign: "center",
        fontWeight: 'normal',
        textTransform: 'uppercase'
    },
    logo_container:{
        position: "absolute",
        top: '0',
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
    verify_pass:{
        width: 65,
        height: 5,
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
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title_verify_pass:{
        fontWeight: 'normal',
        marginBottom: 30,
        marginTop: 30
    },
    input:{
        marginBottom: 20,
        borderBottomColor: '#fff'
    }
})
