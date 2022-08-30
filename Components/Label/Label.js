import { StyleSheet, Text, View } from "react-native";

export default function Label({children, color = '#9949CA', size = 30}){
    return(
        <Text style={[styles.text, {color, fontSize: size}]}>{children}</Text>
    )
}
const styles = StyleSheet.create({
    text:{
        fontWeight: 'bold',
        fontSize: 30,
        marginVertical: 10,
    }
});