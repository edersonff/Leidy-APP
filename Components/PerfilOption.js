import { StyleSheet, TouchableHighlight, View } from 'react-native'
import styled from 'styled-components/native'
import * as RootNavigation from '../Components/Util/navigation';

export default function PerfilOption({text, rate, src, color = '#000', first, last}){
    return(
        <TouchableHighlight 
            style={[{marginLeft: first ? 0 : 'auto', marginRight: last ? 0 : 'auto' }, styles.container]}
            onPress={()=>{
                RootNavigation.navigate('Pedido');
            }}
        >
            <MenuImage>
                <ImageView>
                    <Image source={src}/>
                </ImageView>
                <Name>{text}</Name>
                <View style={styles.container_desc}>
                    <Rate style={{color: `rgb(255,${ rate*170/5 },0)`}}>{rate.toFixed(1)}</Rate>
                    <Description>
                    Preciso de alguém para ... 
                    </Description>
                </View>
            </MenuImage>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    container_desc:{
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        fontSize: 24,
        marginRight: 25,
    }
});
const MenuImage = styled.View`
    textAlign: left;
    width: 80px;
`
const Image = styled.Image`
    resize-mode: contain;
    height: 80px;
    width: 100%;
    border-radius: 90px;
`
const ImageView = styled.View`
    text-align: left;
`
const Name = styled.Text`
    font-size: 12px;
    text-align: left;
`
const Rate = styled.Text`
    font-size: 12px;
    font-weight: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 1px;
    padding: 0 10px;
    margin: 0 auto;
    max-height: 20px;
    margin-bottom: 0;
    background-color: #f8f8f8;
    border-radius: 10px;
`
const Description = styled.Text`
    color: gray;
    font-size: 8px;
    align-items: center;
    text-align: center;
    max-width: 100%;
    margin-top: 2px;
`