import React, { useEffect, useState } from 'react';
import { Text } from 'react-native-paper';
import styles from './Dashboard.style'
import HorizontalScroll from '../../Components/HorizontalScroll';
import MenuImageOption from '../../Components/MenuImageOption';
import PerfilOption from '../../Components/PerfilOption';
import MenuOption from '../../Components/MenuOption';
import Menu from '../../img/Menu01.png';
import Perfil from '../../img/Perfil01.png';
import Filter from '../../Components/Filter';
import Navbar from '../../Components/Navbar';
import { ScrollView, Image, FlatList } from 'react-native';
import VerticalScroll from '../../Components/VerticalScroll';
import Ionicons from '@expo/vector-icons/Ionicons';
import Promotion from '../../img/Promotion-example.png'
import Layout from '../Layout/Layout';
import ModalGeneral from '../../Components/Modal';
function Limpeza({ navigation }) {
    return (
        <>
            <Text style={styles.address}>R. address, number</Text>
            <HorizontalScroll marginTop={13}>
                <MenuOption text='Limpeza' selected={true} color='green' first={true} />
                <MenuOption text='Lavação' />
                <MenuOption text='Lavação' />
                <MenuOption text='Lavação' />
            </HorizontalScroll>
            <HorizontalScroll>
                <Filter title="Relevante" />
                <Filter title="Período" options={[ 'Small', 'Normal', 'Big' ]} />
                <Filter title="Preços" options={[ 'Small', 'Normal', 'Big' ]} />
                <Filter title="Ordem" options={[ 'Small', 'Normal', 'Big' ]} />
            </HorizontalScroll>
            <HorizontalScroll marginTop={10}>
                <MenuImageOption text='Limpeza' src={Menu} first={true} />
                <MenuImageOption text='Lavação' src={Menu} />
                <MenuImageOption text='Lavação' src={Menu} />
                <MenuImageOption text='Lavação' src={Menu} />
                <MenuImageOption text='Lavação' src={Menu} />
                <MenuImageOption text='Lavação' src={Menu} />
                <MenuImageOption text='Lavação' src={Menu} />
                <MenuImageOption text='Lavação' src={Menu} />
                <MenuImageOption text='Lavação' src={Menu} />
            </HorizontalScroll>
            <HorizontalScroll marginTop={5}>
                <PerfilOption text='Jonathan F.' rate={1.0} src={Perfil} first={true} />
                <PerfilOption text='Jonathan F.' rate={5.0} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={2.5} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={3.5} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={4.5} src={Perfil} />
            </HorizontalScroll>
            <HorizontalScroll marginTop={5}>
                <PerfilOption text='Jonathan F.' rate={1.0} src={Perfil} first={true} />
                <PerfilOption text='Jonathan F.' rate={5.0} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={2.5} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={3.5} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={4.5} src={Perfil} />
            </HorizontalScroll>
            <HorizontalScroll marginTop={5}>
                <PerfilOption text='Jonathan F.' rate={1.0} src={Perfil} first={true} />
                <PerfilOption text='Jonathan F.' rate={5.0} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={2.5} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={3.5} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={4.5} src={Perfil} />
            </HorizontalScroll>
        </>
    );
}
export default function Dashnboard({ navigation }){
    const [visible, setVisible] = useState(false);
  
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    return(
        <Layout backgroundColorScoll='#fff' padding={0} margin={20} navigation={navigation}>
            <ModalGeneral visible={visible} close={hideModal} image={Promotion} />
            {/* <ScrollView
                horizontal={true}
                pagingEnabled={true}
                style={styles.HorizontalScroll}
            > */}
                <Limpeza/>
            {/* </ScrollView> */}
        </Layout>
    )
}