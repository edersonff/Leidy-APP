import { StyleSheet } from "react-native";
import { colors } from "../../styles/base";

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5%'
    },
    container_message:{
        height: '70%',
        width: '100%',
        backgroundColor: colors.bg,
        borderRadius: '40px',
        fontSize: '1.4em',
        padding: '20px'
    },
    title:{
        fontSize: '1.6em',
        fontWeight: 600,
        textAlign: 'center',
    },
    paragraf:{
        fontSize: '1.1em',
        fontWeight: 100
    },
    goback:{
        backgroundColor: colors.bg,
        width: '60px',
        height: '60px',
        borderRadius: '50px',
        justifyContent: 'center',
        alignItems: 'center'
    },
    goback_icon:{
        width: '100%'
    },
    goback_container:{
        width: '100%',
        justifyContent: 'center',
        height: '20%',
        minHeight: '70px'
    }
})