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
    form_container:{
        height: '80%',
        backgroundColor: colors.bg,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form:{
        width: '80%',
        height: '100%',
        justifyContent: 'center'
    },
    form_control:{
        width: '100%',
        height: '70%',
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
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2
    },
    logo_text:{
        color: colors.bg,
        fontSize: 30
    },
    verify_pass:{
        width: '65px',
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
        marginVertical: '15px',
    },
    label_container:{
        width: '100%',
    }
})
