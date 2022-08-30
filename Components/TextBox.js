import { StyleSheet } from 'react-native'
import { Text } from 'react-native'

export default function TextBox({children, center, color='gray', padding = 0, weight = 'normal', size = 24, style}){
    return(
        <Text style={[style, styles.textBox, { textAlign: center ? 'center' : 'left', color, padding, fontWeight: weight, fontSize: size}]}>
            {children}
        </Text>
    )
}
const styles = StyleSheet.create({
    textBox: {
        fontWeight: 'normal',
        width: '100%'
    },
})