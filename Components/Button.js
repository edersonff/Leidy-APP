import { TouchableOpacity, Text, View } from 'react-native';
import { StyleSheet } from "react-native";
import { colors } from '../styles/base';

export default function Btn({text, fill, onPress, style, color}){
    const btns = StyleSheet.create({
        btn:{
            padding: '20px',
            backgroundColor: colors.bg,
            alignItems: 'center',            
            boxShadow: "5px 5px 1px rgb(255,255,255,0.12)",
            border: '3px solid '+color,
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
        <View>
            <TouchableOpacity onPress={onPress} style={[btns.btn, fill ? btns.fill : btns.empty, style]}>
                <Text style={[btns.btn_text, fill ? {color: colors.bg} : {color}]}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}
