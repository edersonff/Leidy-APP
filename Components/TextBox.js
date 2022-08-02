import { StyleSheet } from 'react-native'
import { Text } from 'react-native'

export default function TextBox({children, center, color='gray', padding = 0, weight = 'normal'}){
    return(
        <Text style={[styles.textBox, { textAlign: center ? 'center' : 'left', color, padding, fontWeight: weight }]}>
            {children}
        </Text>
    )
}
const styles = StyleSheet.create({
    textBox: {
        fontSize: 24,
        fontWeight: 'normal',
        width: '100%'
    },
})