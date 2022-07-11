import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import styles from './Dashboard.style'
import HorizontalScroll from '../../Components/HorizontalScroll';
import MenuImageOption from '../../Components/MenuImageOption';
import PerfilOption from '../../Components/PerfilOption';
import MenuOption from '../../Components/MenuOption';
import Menu from '../../img/Menu01.png';
import Perfil from '../../img/Perfil01.png';
import Filter from '../../Components/Filter';
import Navbar from '../../Components/Navbar';
import { ScrollView } from 'react-native';
export default function Loading({ navigation }) {
    const [ menuSelected, setMenuSelected] = useState(0);
    return (
        <>
            <ScrollView style={styles.container}>
                <Text style={styles.address}>R. address, number</Text>
                <HorizontalScroll marginTop={13}>
                    <MenuOption text='Limpeza' selected={true} color='green' first={true} />
                    <MenuOption text='Lavação' />
                    <MenuOption text='Lavação' />
                    <MenuOption text='Lavação' />
                </HorizontalScroll>
                <HorizontalScroll>
                    <Filter title="Relevante" />
                    <Filter title="Período" options={[ '' ]} />
                    <Filter title="Preços" options={[ '' ]} />
                    <Filter title="Ordem" options={[ '' ]} />
                </HorizontalScroll>
                <HorizontalScroll marginTop={10}>
                    <MenuImageOption text='Limpeza' src={Menu} first={true} />
                    <MenuImageOption text='Lavação' src={Menu} />
                    <MenuImageOption text='Lavação' src={Menu} />
                    <MenuImageOption text='Lavação' src={Menu} />
                    <MenuImageOption text='Lavação' src={Menu} />
                </HorizontalScroll>
                <HorizontalScroll marginTop={20}>
                    <PerfilOption text='Jonathan F.' rate={1.0} src={Perfil} first={true} />
                    <PerfilOption text='Jonathan F.' rate={5.0} src={Perfil} />
                    <PerfilOption text='Jonathan F.' rate={2.5} src={Perfil} />
                    <PerfilOption text='Jonathan F.' rate={3.5} src={Perfil} />
                    <PerfilOption text='Jonathan F.' rate={4.5} src={Perfil} />
                </HorizontalScroll>
            </ScrollView>
            <Navbar navigation={navigation} />
        </>
    );
}