import React, { useEffect, useState } from 'react';
import { Modal, Portal, Text } from 'react-native-paper';
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
            <HorizontalScroll marginTop={20}>
                <PerfilOption text='Jonathan F.' rate={1.0} src={Perfil} first={true} />
                <PerfilOption text='Jonathan F.' rate={5.0} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={2.5} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={3.5} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={4.5} src={Perfil} />
            </HorizontalScroll>
            <HorizontalScroll marginTop={20}>
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
    const [visible, setVisible] = useState(true);
  
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    return(
        <Layout navigation={navigation}>
            <Portal>
                <Modal visible={visible} style={styles.portal} onDismiss={hideModal} contentContainerStyle={styles.modal}>
                    <Ionicons style={styles.close_modal} size={30} color="rgb(230,230,230)" onPress={hideModal} name="close"/>
                    <Image source={Promotion} style={styles.image_modal}/>
                </Modal>
            </Portal>
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                style={styles.HorizontalScroll}
            >
                <Limpeza/>
                <Limpeza/>
            </ScrollView>
        </Layout>
    )
}