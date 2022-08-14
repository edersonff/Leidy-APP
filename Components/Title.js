import { StyleSheet } from 'react-native'
import { Text } from 'react-native'

export default function Title({children, center, color='gray', weight = 'normal', size=26, style, mBottom = 0}){
    return(
        <Text style={
            [ styles.title, { textAlign: center ? 'center' : 'left', color,  fontWeight: weight, fontSize: size, marginBottom: mBottom} ]
        }>
            {children}
        </Text>
    )
}
const styles = StyleSheet.create({
    title: {
        display: 'flex'
    },
})