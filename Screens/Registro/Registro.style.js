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
})
