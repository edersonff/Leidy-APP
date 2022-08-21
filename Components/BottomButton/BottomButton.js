import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import Btn from "../Button";

export default function BottomButton({children, onPress}){
    return(
        <View style={styles.container_button}>
            <Button onPress={onPress} fill fontSize={24} style={styles.btn} contentStyle={styles.contentStyle} labelStyle={styles.labelStyle} >{children}</Button>
        </View>
    )    
}
const styles = StyleSheet.create({
    container_button:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#f3f3f3',
    },
    btn:{
        width: '100%',
    },
    contentStyle:{
        width: '100%',
        backgroundColor: '#4075FF',
        paddingVertical: 8,
        paddingHorizontal: 5,
    },
    labelStyle:{
        color: 'white',
        fontWeight: 'bold'
    }
});