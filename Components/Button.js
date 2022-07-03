import { TouchableOpacity, Text, View } from 'react-native';
import { StyleSheet } from "react-native";
import { colors } from '../styles/base';

export default function Btn({text, fill, onPress, style, color}){
    const btns = StyleSheet.create({
        btn:{
            padding: '20px',
            backgroundColor: '#fff',
            alignItems: 'center',            
            boxShadow: "5px 5px 1px rgb(255,255,255,0.12)",
            border: '3px solid '+color,
        },
        btn_text:{
            fontWeight: 600,
            fontSize: '1.2em',
            letterSpacing: 1
        },
        fill:{
            backgroundColor: color,
            color: '#fff',
        },
        empty:{
            backgroundColor: '#fff',
        }
    })
    return(
        <View>
            <TouchableOpacity onPress={onPress} style={[btns.btn, fill ? btns.fill : btns.empty, style]}>
                <Text style={[btns.btn_text, fill ? {color: '#fff'} : {color}]}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}
