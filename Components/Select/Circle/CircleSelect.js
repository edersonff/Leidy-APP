import { StyleSheet, View } from "react-native";
import { TouchableRipple } from 'react-native-paper';

export default function CircleSelect({onPress, children, color = '#dddddd', padding = 7, style, styleContent}){
    return(
        <View style={[styles.touchable_container, style]}>
          <TouchableRipple rippleColor={color} onPress={onPress} style={[{padding}, styleContent]}>
            {children}
          </TouchableRipple>
        </View>
    )
}
const styles = StyleSheet.create({
    touchable_container:{
      borderRadius: 100,
      overflow:'hidden' 
    },
});