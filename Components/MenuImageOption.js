import styled from 'styled-components/native'

export default function MenuImageOption({text, src, color = '#000', first}){
    const Container = styled.View`
        fontSize: 1.2em;
        margin: 0 15px;
        margin-left: ${first ? '0' : 'auto'};
    `
    const Text = styled.Text`
        color: ${ color };
        font-size: 12px;
        text-align: center;
        font-weight: 700;
    `
    return(
        <Container>
            <MenuImage>
                <ImageView>
                    <Image source={src}/>
                </ImageView>
                <Text>{text}</Text>
            </MenuImage>
        </Container>
    )
}

const MenuImage = styled.View`
textAlign: left;
`
const Image = styled.Image`
resize-mode: contain;
width: 90px;
height: 90px;
border-radius: 9px;
`
const ImageView = styled.View`
textAlign: left;
`