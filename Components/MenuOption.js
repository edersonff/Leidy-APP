import styled from 'styled-components/native'

export default function MenuOption({text, selected, color = '#000', first}){
    return(
        <Container>
            <MenuNav style={{ borderBottomColor: selected ? color : 'transparent' }}>
                <TextNav style={{color}}>{text}</TextNav>
            </MenuNav>
        </Container>
    )
}
const Container = styled.View`
fontSize: 1.2em;
margin: 0 15px;
`
const MenuNav = styled.View`
outlineStyle: none;
padding-bottom: 13px;
width: 100px;
textAlign: left;
border-bottom-width: 3px;
border-bottom-style : solid;
`
const TextNav = styled.Text`
font-size: 12px;
text-align: center;
font-weight: 700;
`