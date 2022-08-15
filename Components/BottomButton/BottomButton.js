import { StyleSheet, View } from "react-native";
import Btn from "../Button";

export default function BottomButton(){
    return(
        <View style={styles.container_button}>
            <Btn style={styles.button}>Receber serviço</Btn>
        </View>
    )    
}
const styles = StyleSheet.create({
    container_button:{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    button:{
        
    }
});