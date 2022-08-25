import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function FillText({color, textColor = '#fff', children}){
    return(
        <View style={[styles.fill_text_container, {backgroundColor: color}]}><Text style={[{color: textColor}, styles.textFill]}>{children}</Text></View>
    )
}
const styles = StyleSheet.create({
    fill_text_container:{
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    textFill:{
        fontWeight: 'bold',
        letterSpacing: 2,
    }
});