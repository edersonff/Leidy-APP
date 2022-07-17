import styled from 'styled-components/native'
import { StyleSheet, View } from 'react-native-web'
import { Image, Text } from 'react-native'

export default function MenuImageOption({text, src, color = '#000', first}){
    return(
        <Container style={[{marginLeft: first ? 0 : 'auto'}, styles.container]}>
            <View style={styles.imageView}>
                <View>
                    <Image style={styles.image} source={src}/>
                </View>
                <Text style={[{color}, styles.text]}>{text}</Text>
            </View>
        </Container>
    )
}
const styles = StyleSheet.create({
    container: {
        fontSize: '1.2em',
    },
    text:{
        fontSize: 12,
        fontAlign: 'center',
        fontWeight: 700,
    },
    image: {
        resizeMode: 'contain',
        heigth: 90,
        width: 90,
        borderRadius: 9,
    },
    imageView:{
        textAlign: 'left',
    }
})
const Container = styled.View`
margin: 0 15px;
`