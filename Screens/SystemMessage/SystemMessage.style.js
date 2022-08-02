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
        fontSize: 30,
        padding: '20px'
    },
    title:{
        fontSize: 30,
        fontWeight: 'normal',
        textAlign: 'center',
    },
    paragraf:{
        fontSize: 25,
        fontWeight: 'normal'
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