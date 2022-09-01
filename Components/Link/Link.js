import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { navigate } from '../../Components/Util/navigation';

export default function Link({children, style, route, align = 'left'}){
    return(
        <TouchableOpacity activeOpacity={0.5} onPress={()=>{navigate(route)}} style={[styles.link_container, style]}>
            <Text style={[styles.text, {textAlign: align}]}>{children}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    text:{
        color: '#5555df',
        fontSize: 18,
    },
});