import { Pressable, StyleSheet, Text, View } from "react-native";
import { navigate } from '../../Components/Util/navigation';

export default function Link({children, style, route, align = 'left'}){
    return(
        <Pressable onPress={()=>{navigate(route)}} style={[styles.link_container, style]}>
            <Text style={[styles.text, {textAlign: align}]}>{children}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    text:{
        color: '#5555df',
        fontSize: 18,
    },
    link_container:{
    }
});