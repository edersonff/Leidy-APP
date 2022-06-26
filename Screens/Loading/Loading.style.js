import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container_image: {
        resizeMode:'contain',
        height: 300,
        width: 300
    },
    image:{
        resizeMode:'contain',
        width: '100%',
        height: '100%'
    }
})