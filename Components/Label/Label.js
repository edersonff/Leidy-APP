import { StyleSheet, Text, View } from "react-native";

export default function Label({children}){
    return(
        <Text style={styles.text}>{children}</Text>
    )
}
const styles = StyleSheet.create({
    text:{
        color: '#9949CA',
        fontWeight: 'bold',
        fontSize: 30,
        marginVertical: 10,
    }
});