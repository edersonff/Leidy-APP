import { StyleSheet, StatusBar } from "react-native";
export const colors = {
    primal: 'lightblue',
}
export default StyleSheet.create({
    head_container:{
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
        borderBottomWidth: 1,
        borderBottomColor: "#dddddd",
        backgroundColor: '#fff'
    },
    image_head:{
        width: 50,
        height: 50,
        resizeMode: 'cover',
        borderRadius: 25,
    },
    userName:{
        fontSize: 25,
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
    }
});
