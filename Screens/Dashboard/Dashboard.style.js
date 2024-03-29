import { StyleSheet, StatusBar } from "react-native";
export default StyleSheet.create({
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
        color: '#9949CA',
        fontWeight: 'normal',
    },
    modal:{
      padding: 0, 
      borderRadius: 15,
      width: '90%',
      minHeight: '50%',
      position: 'relative',
      overflow: 'hidden',
    },
    portal:{
      justifyContent:'center',
      alignItems: 'center',
    },
    close_modal:{
      position: 'absolute',
      top: 10,
      right: 10,
    },
    image_modal:{
      minWidth: '100%',
      minHeight: '100%',
      position: 'absolute',
      zIndex: -1
    },
    slide:{
      width: '100%'
    },
    horizontalScroll:{
      width: '100%',
      marginRight: 20
    },
    horizontalScrollContainer:{
      flexDirection: 'row',
      width: '100%'
    },
    horizontalMenuSelector:{
      width: 100,
      height: 2,
      backgroundColor: 'blue',
      position: 'absolute',
      bottom: 0
    },
    horizontalMenu:{
      position: 'relative',
    }
})