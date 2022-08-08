import styled from 'styled-components/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';

export default function Navbar({navigation}){
    
    const onPress=(nav) => {navigation.navigate(nav)};
    return(
        <Container>
            <ItemIcon routes='Dashboard' onPress={()=>onPress('Dashboard')} icon="home-outline" text="Inicio" />
            <ItemIcon routes='Busca' onPress={()=>onPress('Busca')} icon="search-outline" text="Busca" />
            <ItemIcon routes='Pedidos' onPress={()=>onPress('Pedidos')} icon="document-outline" text="Pedidos" />
            <ItemIcon routes='Perfil' onPress={()=>onPress('Perfil')} icon="person-circle-outline" text="Perfil" />
        </Container>
    )
}
const Container = styled.View`
flex: 1;
width: 100%;
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
function ItemIcon({onPress, text, icon, routes}){
    const route = useRoute().name;
    return(
        <IconContainer onPress={onPress}>
            <Ionicons style={{color: route == routes ? 'black' : 'gray' }} name={icon} size={23} />
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
    justify-content:center;
`