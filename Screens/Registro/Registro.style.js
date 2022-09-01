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
        flex: 5,
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
        justifyContent: 'center',
        // justifyContent: 'space-evenly',
        // paddingVertical: 20,
    },
    form_control:{
        width: '100%',
    },
    logo_text:{
        color: colors.bg,
        fontSize: 30
    },
})
