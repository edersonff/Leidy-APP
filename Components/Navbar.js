import styled from 'styled-components/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';
import { navigate } from '../Components/Util/navigation';
import CircleSelect from './Select/Circle/CircleSelect';
import { Keyboard, StyleSheet, View } from 'react-native';
import { useState } from 'react';

export default function Navbar(){
    const [visible, setVisible] = useState(true);
    if(!visible){
        return;
    }
    const invertVisible = () =>setVisible(!visible);
    Keyboard.addListener( 'keyboardDidShow', () =>setVisible(false));
    Keyboard.addListener( 'keyboardDidHide', () =>setVisible(true));
    const onPress=(nav) => {navigate(nav)};
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
    width: 100%;
    height: 55px;
    align-items: center;
    flex-direction: row;
    background-color: white;
    border-top-width: 1px;
    border-top-style : solid;
    border-top-color : rgb(230,230,230);
`
function ItemIcon({onPress, text, icon, routes}){
    const route = useRoute().name;
    return(
        <CircleSelect style={styles.circleSelect} styleContent={styles.circleSelect_content} color='#33333' onPress={onPress}>
            <>
                <Ionicons style={{color: route == routes ? 'black' : 'gray' }} name={icon} size={25} />
                <IconText>{text}</IconText>
            </>
        </CircleSelect>
    )
}
const IconText = styled.Text`
    font-size: 11px;
    text-align: center;
`
const styles = StyleSheet.create({
    circleSelect:{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
    },
    circleSelect_content:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
const IconContainer = styled.TouchableOpacity`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
`