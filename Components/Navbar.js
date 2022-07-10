import styled from 'styled-components/native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function PerfilOption({first, navigation}){
    const Container = styled.View`
        flex: 1;
        width: 100%;
        fontSize: 1.2em;
        margin-left: ${first ? '0' : 'auto'};
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        flex-direction: row;
        background-color: white;
        border-top-width: 1px;
        border-top-style : solid;
        border-top-color : rgb(230,230,230);
        position: fixed;
        bottom: 0;
    `
    const IconText = styled.Text`
        font-size: 11px;
        text-align: center;
    `
    const IconContainer = styled.View`
        display: flex;
        flex-direction: column;
        align-items: center;
    `
    return(
        <Container>
            <IconContainer>
                <Ionicons name="home-outline" size={23} />
                <IconText>Inicio</IconText>
            </IconContainer>
            <IconContainer>
                <Ionicons name="search-outline" size={23} />
                <IconText>Busca</IconText>
            </IconContainer>
            <IconContainer>
                <Ionicons name="document-outline" size={23} />
                <IconText>Pedidos</IconText>
            </IconContainer>
            <IconContainer>
                <Ionicons name="person-circle-outline" size={23} />
                <IconText>Perfil</IconText>
            </IconContainer>
        </Container>
    )
}