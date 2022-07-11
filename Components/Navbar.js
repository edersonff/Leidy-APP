import styled from 'styled-components/native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Navbar({first, navigation}){
    return(
        <Container>
            <ItemIcon onPress={() => {navigation.navigate('Dashboard')}} icon="home-outline" text="Inicio" />
            <ItemIcon icon="search-outline" text="Busca" />
            <ItemIcon icon="document-outline" text="Pedidos" />
            <ItemIcon onPress={() => {navigation.navigate('Perfil')}} icon="person-circle-outline" text="Perfil" />
        </Container>
    )
}
const Container = styled.View`
flex: 1;
width: 100%;
fontSize: 1.2em;
justify-content: space-between;
align-items: center;
padding: 10px 20px;
flex-direction: row;
background-color: white;
border-top-width: 1px;
border-top-style : solid;
border-top-color : rgb(230,230,230);
position: absolute;
bottom: 0;
`
function ItemIcon({onPress, text, icon}){
    return(
        <IconContainer onPress={onPress}>
            <Ionicons name={icon} size={23} />
            <IconText>{text}</IconText>
        </IconContainer>
    )
}
const IconText = styled.Text`
    font-size: 11px;
    text-align: center;
`
const IconContainer = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    align-items: center;
`