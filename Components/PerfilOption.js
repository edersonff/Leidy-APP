import { StyleSheet, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native'
import { navigate } from '../Components/Util/navigation';
import { TouchableRipple } from 'react-native-paper';

export default function PerfilOption({id, text, rate, src, first, last}){
    return(
        <TouchableRipple 
            style={[{marginLeft: first ? 0 : null , marginRight: last ? 0 : null}, styles.container]}
            onPress={()=>{
                navigate('Pedido', {id});
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
        </TouchableRipple>
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
        marginHorizontal: 12.5,
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