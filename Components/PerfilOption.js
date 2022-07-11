import styled from 'styled-components/native'

export default function PerfilOption({text, rate, src, color = '#000', first}){
    return(
        <Container>
            <MenuImage>
                <ImageView>
                    <Image source={src}/>
                </ImageView>
                <Name>{text}</Name>
                <Rate style={{color: `rgb(255,${ rate*170/5 },0)`}}>{rate.toFixed(1)}</Rate>
                <Description>
                Preciso de alguém para ... 
                </Description>
            </MenuImage>
        </Container>
    )
}
const Container = styled.View`
    fontSize: 1.2em;
    margin: 0 15px;
`
const MenuImage = styled.View`
    textAlign: left;
    width: 110px;
`
const Image = styled.Image`
    resize-mode: contain;
    height: 110px;
    width: 100%;
    border-radius: 9px;
`
const ImageView = styled.View`
    textAlign: left;
`
const Name = styled.Text`
    font-size: 15px;
    text-align: center;
`
const Rate = styled.Text`
    font-size: 12px;
    text-align: center;
    font-weight: 700;
    letter-spacing: 1px;
`
const Description = styled.Text`
    color: gray;
    font-size: 8px;
    letter-spacing: 1px;
    align-items: center;
    text-align: justify;
    max-width: 100%;
`