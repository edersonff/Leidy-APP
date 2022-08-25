import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function ImportantValue({title, children, color="#4075FF"}){
    return(
        <View style={styles.important_value_container}>
            <Text style={[styles.text, styles.important, {color}]}>{title}</Text>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    important_value_container:{
        maxWidth: 70,
    },
    text:{
        fontSize: 13,
    },
    important:{
        fontWeight: 'bold'
    }
});