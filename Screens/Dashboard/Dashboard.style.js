import { StyleSheet, StatusBar } from "react-native";
export default StyleSheet.create({
    container: {
      paddingTop: StatusBar.currentHeight,
      padding: 20,
      flex: 12,
      backgroundColor: '#fff'
    },
    menu: {
      flexGrow: 1,
      marginTop: 10
    },
    menu_container:{
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        height: '100%',
    }, 
    text:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    address:{
        fontSize: 15,
        color: 'gray',
        fontWeight: '400',
    }
})