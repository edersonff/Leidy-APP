import { Platform, StatusBar, StyleSheet } from "react-native";
import { colors } from '../../styles/base';
export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',   
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#fff'
    },
    btns_container: {
        height: '40%',
        width: '80%',
        justifyContent: 'space-evenly'
    },
    form_control:{
        height: '80%',
        marginHorizontal: 'auto',
        justifyContent: 'space-between',
    },
    logo_container:{
        top: 0,
        width: '100%',
        height: '22%',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        zIndex: 2
    },
    logo_text:{
        color: '#9949CA',
        fontWeight: 'bold',
        fontSize: 30,
        marginVertical: 10,
    },
    input:{
        marginBottom: 10,
        backgroundColor: '#fff',
        fontSize: 18,
        width: '100%',
        height: 60,
    },
    login_image:{
        width: '100%',
        height: '100%'
    }
})
