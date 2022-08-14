import { Text, View } from 'react-native';
import { StyleSheet } from "react-native";
import { colors } from '../styles/base';
import { Button } from 'react-native-paper';

export default function Btn({text, fill = false, onPress, style, color, fontSize}){
    const styles = StyleSheet.create({
        container:{
            width: '100%',
            backgroundColor: colors.bg,
            padding: 10,
            alignItems: 'center',    
            borderRadius: 6,        
            boxShadow: "5px 5px 1px rgb(255,255,255,0.12)",
            border: '3px solid '+color,
        },  
        btn:{
            width: '100%'
        },
        btn_text:{
            fontWeight: 'normal',
            fontSize: 24,
            letterSpacing: 1
        },
        fill:{
            backgroundColor: color,
            color: colors.bg,
        },
        empty:{
            backgroundColor: colors.bg,
        }
    })
    return(
        <Button style={styles.btn} contentStyle={[styles.container, fill ? styles.fill : styles.empty]} onPress={onPress}>
            <Text style={[styles.btn_text, fill ? {color: colors.bg} : {color}, {fontSize}]}>{text}</Text>
        </Button>
    )
}
