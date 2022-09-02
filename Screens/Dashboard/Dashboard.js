import React, { useEffect, useRef, useState } from 'react';
import { Button, Text } from 'react-native-paper';
import styles from './Dashboard.style'
import HorizontalScroll from '../../Components/HorizontalScroll';
import MenuImageOption from '../../Components/MenuImageOption';
import PerfilOption from '../../Components/PerfilOption';
import Menu from '../../img/Menu01.png';
import Perfil from '../../img/teste.png';
import Filter from '../../Components/Filter';
import { ScrollView, FlatList, View, Dimensions } from 'react-native';
import Promotion from '../../img/Promotion-example.png'
import Layout from '../Layout/Layout';
import ModalGeneral from '../../Components/Modal';
import MenuSelect from '../../Components/Dashboard/MenuSelect/MenuSelect';
import BottomButton from '../../Components/BottomButton/BottomButton';
function DashboardFirst() {
    const data = [
        {
            title: 'Perfis',
            options:[
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
            ]
        },
        {
            title: 'Perfis',
            options:[
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
            ]
        },
        {
            title: 'Perfis',
            options:[
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
            ]
        },
        {
            title: 'Perfis',
            options:[
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
            ]
        },
        {
            title: 'Perfis',
            options:[
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
            ]
        },
        {
            title: 'Perfis',
            options:[
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
                { title: 'Jonathan F.', rate:1.0, src:Perfil },
            ]
        },
    ]
    return (
        <View style={styles.horizontalScroll}>
            <FlatList 
                data={data}
                renderItem={(list)=>{
                    return(
                        <HorizontalScroll 
                            renderItem={(data)=>{
                                const id = data.index;
                                const item = data.item;
                                return (
                                    <PerfilOption id={id} text={item.title} rate={item.rate} src={item.src} first={id == 0} last={id+1 == list.item.options.length} />
                                )
                            }} 
                            list={list.item.options} marginTop={5}
                        />
                    )
                }
            } />
        </View>
    );
}
export default function Dashnboard(){

    const filters = [
        { title: 'Relevante',  options:[ 'Small', 'Normal', 'Big' ]},
        { title: 'Período', options:[ 'Small', 'Normal', 'Big' ]},
        { title: 'Preços', options:[ 'Small', 'Normal', 'Big' ]},
        { title: 'Ordem' },
    ]
    const menuImageOptions = [
        { title: 'Lavação', src: 0},
        { title: 'Lavação', src: 0 },
        { title: 'Lavação', src: 0},
        { title: 'Lavação', src: 0 },
        { title: 'Lavação', src: 0 },
        { title: 'Lavação', src: 0 },
        { title: 'Lavação', src: 0 },
        { title: 'Lavação', src: 0 },
        { title: 'Lavação', src: 0 },
    ]
    const scrollViewRef = useRef(null);
    const changeScroll = (index)=>{
        scrollViewRef.current.scrollTo({x: index * Dimensions.get('screen').width, y:0, animated: true});
    }
    return(
        <Layout backgroundColorScoll='#fff' padding={0} margin={20} >
            {/* <ScrollModal /> */}
            <ModalGeneral carousels={['', '', '', '']} image={Promotion} />
            <View>
                <BottomButton onPress={()=>{changeScroll(1)}}>AAAAAAAA</BottomButton>
                <BottomButton onPress={()=>{changeScroll(2)}}>AAAAAAAA</BottomButton>
                <BottomButton onPress={()=>{changeScroll(3)}}>AAAAAAAA</BottomButton>
                <Text style={styles.address}>R. address, number</Text>
                <MenuSelect/>
                <HorizontalScroll list={filters} renderItem={(data)=>{
                    const id = data.index;
                    const item = data.item;
                    return (
                        <Filter id={id} title={item.title} options={item.options} first={id == 0} last={id+1 == filters.length} />
                    )
                }}/>
                <HorizontalScroll list={menuImageOptions} renderItem={(data)=>{
                    const id = data.index;
                    const item = data.item;
                    return (
                        <MenuImageOption text={item.title} src={Menu} first={id == 0} last={id+1 == filters.length} />
                    )
                }}/>
                <ScrollView
                    horizontal={true}
                    contentContainerStyle={{width: 200}}
                    style={{width: 200}}
                    // showsHorizontalScrollIndicator={false}
                    ref={scrollViewRef}
                    // scrollEventThrottle={200}
                    // decelerationRate="fast"
                    // pagingEnabled
                >
                    <DashboardFirst/>
                    <DashboardFirst/>
                    <DashboardFirst/>
                </ScrollView>
            </View>
        </Layout>
    )
}