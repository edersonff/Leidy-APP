import { StyleSheet, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text } from "react-native-paper";

export default function Local({locate}){
    return(
        <View style={styles.local_container}>
            <Text style={styles.locate_text}>{locate}</Text>
            <Ionicons color='gray' name='pin' size={20} />
        </View>
    )
}
const styles = StyleSheet.create({
    local_container:{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    locate_text:{
        color: 'gray'
    }
});