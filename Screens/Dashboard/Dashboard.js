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
import { ScrollView, Image, FlatList, View } from 'react-native';
import VerticalScroll from '../../Components/VerticalScroll';
import Ionicons from '@expo/vector-icons/Ionicons';
import Promotion from '../../img/Promotion-example.png'
import Layout from '../Layout/Layout';
import ModalGeneral from '../../Components/Modal';
import MenuSelect from '../../Components/Dashboard/MenuSelect/MenuSelect';
function DashboardFirst() {
    return (
        <View style={styles.horizontalScroll}>
            <HorizontalScroll marginTop={5}>
                <PerfilOption text='Jonathan F.' rate={1.0} src={Perfil} first />
                <PerfilOption text='Jonathan F.' rate={5.0} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={2.5} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={3.5} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={4.5} src={Perfil} last />
            </HorizontalScroll>
            <HorizontalScroll marginTop={5}>
                <PerfilOption text='Jonathan F.' rate={1.0} src={Perfil} first />
                <PerfilOption text='Jonathan F.' rate={5.0} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={2.5} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={3.5} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={4.5} src={Perfil} last />
            </HorizontalScroll>
            <HorizontalScroll marginTop={5}>
                <PerfilOption text='Jonathan F.' rate={1.0} src={Perfil} first />
                <PerfilOption text='Jonathan F.' rate={5.0} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={2.5} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={3.5} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={4.5} src={Perfil} last />
            </HorizontalScroll>
            <HorizontalScroll marginTop={5}>
                <PerfilOption text='Jonathan F.' rate={1.0} src={Perfil} first />
                <PerfilOption text='Jonathan F.' rate={5.0} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={2.5} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={3.5} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={4.5} src={Perfil} last />
            </HorizontalScroll>
            <HorizontalScroll marginTop={5}>
                <PerfilOption text='Jonathan F.' rate={1.0} src={Perfil} first />
                <PerfilOption text='Jonathan F.' rate={5.0} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={2.5} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={3.5} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={4.5} src={Perfil} last />
            </HorizontalScroll>
            <HorizontalScroll marginTop={5}>
                <PerfilOption text='Jonathan F.' rate={1.0} src={Perfil} first />
                <PerfilOption text='Jonathan F.' rate={5.0} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={2.5} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={3.5} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={4.5} src={Perfil} last />
            </HorizontalScroll>
            <HorizontalScroll marginTop={5}>
                <PerfilOption text='Jonathan F.' rate={1.0} src={Perfil} first />
                <PerfilOption text='Jonathan F.' rate={5.0} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={2.5} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={3.5} src={Perfil} />
                <PerfilOption text='Jonathan F.' rate={4.5} src={Perfil} last />
            </HorizontalScroll>
        </View>
    );
}
export default function Dashnboard({ navigation }){
    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    return(
        <Layout backgroundColorScoll='#fff' padding={0} margin={20} navigation={navigation}>
            <ModalGeneral visible={visible} close={hideModal} image={Promotion} />
            <View>
                <Text style={styles.address}>R. address, number</Text>
                <MenuSelect/>
                <HorizontalScroll>
                    <Filter title="Relevante" first />
                    <Filter title="Período" options={[ 'Small', 'Normal', 'Big' ]} />
                    <Filter title="Preços" options={[ 'Small', 'Normal', 'Big' ]} />
                    <Filter title="Ordem" options={[ 'Small', 'Normal', 'Big' ]} last />
                </HorizontalScroll>
                <HorizontalScroll marginTop={10}>
                    <MenuImageOption text='Limpeza' src={Menu} first />
                    <MenuImageOption text='Lavação' src={Menu} />
                    <MenuImageOption text='Lavação' src={Menu} />
                    <MenuImageOption text='Lavação' src={Menu} />
                    <MenuImageOption text='Lavação' src={Menu} />
                    <MenuImageOption text='Lavação' src={Menu} />
                    <MenuImageOption text='Lavação' src={Menu} />
                    <MenuImageOption text='Lavação' src={Menu} />
                    <MenuImageOption text='Lavação' src={Menu} last />
                </HorizontalScroll>
                <ScrollView
                    horizontal={true}
                    contentContainerStyle={styles.horizontalScrollContainer}
                    // showsHorizontalScrollIndicator={false}
                    scrollEnabled={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                >
                    <DashboardFirst/>
                    <DashboardFirst/>
                </ScrollView>
            </View>
        </Layout>
    )
}