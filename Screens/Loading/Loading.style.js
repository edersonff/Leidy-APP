import { StyleSheet } from "react-native";
import { colors } from "../../styles/base";
export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.bg,
    },
    container_image: {
        resizeMode:'contain',
        width: '100%',
        height: '60%',
        alignItems: 'center',
        justifyContent:'center',
        position: 'absolute',
    },
    image:{
        resizeMode:'contain',
        width: '100%',
        height: '100%',
    },
    circle:{
        backgroundColor: '#ec0189',
        width: 10,
        height: 10,
        borderRadius: 10,
    },
    circle_container:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        zIndex: 1,
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold'
    }
})