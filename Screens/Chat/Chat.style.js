import { StyleSheet, StatusBar } from "react-native";
export const colors = {
    primal: 'lightblue',
}
export default StyleSheet.create({
    head_container:{
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
        borderBottomWidth: 1,
        borderBottomColor: "#dddddd",
        backgroundColor: '#fff'
    },
    image_head:{
        width: 45,
        height: 45,
        resizeMode: 'cover',
        borderRadius: 25,
    },
    userName:{
        fontSize: 21,
        marginLeft: 20,
        color: '#555555',
    },
    actions:{
        flexDirection: 'row'
    },
    chat_container:{
        width: '100%',
        marginVertical: 5,
        paddingHorizontal: 10,
        flex: 1,
        flexDirection: 'column-reverse'
    },
    chat_textInput:{
        flex: 1,
        backgroundColor: 'white',
        height: 50,
    },
    chat_textInput_container:{
        width: '100%',
        padding: 5,
        backgroundColor: 'white',
        borderTopColor: '#cccccc',
        flexDirection: 'row',
        alignItems: 'center'
    },
    chat_textInput_send:{
        marginHorizontal: 15,
    },
    chat_textInput_send_content:{
        padding: 12,
    }
});
