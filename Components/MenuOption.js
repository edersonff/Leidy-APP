import styled from 'styled-components/native'

export default function MenuOption({text, selected, color = '#000', first}){
    const Container = styled.View`
        fontSize: 1.2em;
        margin: 0 15px;
        margin-left: ${first ? '0' : 'auto'}
    `
    const MenuNav = styled.View`
        outlineStyle: none;
        padding-bottom: 13px;
        width: 100px;
        textAlign: left;
        border-bottom-width: 3px;
        border-bottom-style : solid;
        border-bottom-color : ${ selected ? color : 'transparent' };
    `
    const TextNav = styled.Text`
        color: ${ color };
        font-size: 12px;
        text-align: center;
        font-weight: 700;
    `
    return(
        <Container>
            <MenuNav>
                <TextNav>{text}</TextNav>
            </MenuNav>
        </Container>
    )
}