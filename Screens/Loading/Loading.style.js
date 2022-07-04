import { StyleSheet } from "react-native";
import { colors } from "../../styles/base";
export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.bg,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container_image: {
        resizeMode:'contain',
        height: 300,
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        resizeMode:'contain',
        width: '100%',
        height: '100%'
    }
})