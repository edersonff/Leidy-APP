import { StyleSheet } from 'react-native'
import { View } from 'react-native'

export default function ContainerG({color='gray', margin = 0, padding = 0, children, style}){
    return(
        <View style={[styles.containerG, { color, padding, margin }, style]}>
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    containerG: {
        width: '100%',
    },
})