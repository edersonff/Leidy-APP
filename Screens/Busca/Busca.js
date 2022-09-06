import React from 'react';
import { View, Image, Text, Pressable, FlatList } from 'react-native';
import styles from './Busca.style'
import Context from "../../Context";
import { useState } from 'react';
import Pedido from '../../Components/Pedidos/Pedido/Pedido';
import { Searchbar } from 'react-native-paper';
import Layout from '../Layout/Layout';
import { store } from '../../Context/context';
import Label from '../../Components/Label/Label';
export default function Busca() {
    let context = Context(store);
    const [searchs, setSearchs] = useState([
        {title: 'Pedido n°1', description: 'Descrição muito legal parte 1', rate: 4.5, id: 1},
        {title: 'Pedido n°2', description: 'Descrição muito legal parte 2', rate: 4.5, id: 2},
        {title: 'Pedido n°3', description: 'Descrição muito legal parte 3', rate: 4.5, id: 3},
        {title: 'Pedido n°4', description: 'Descrição muito legal', rate: 4.5, id: 4},
        {title: 'Pedido n°5', description: 'Descrição muito legal', rate: 4.5, id: 5},
        {title: 'Pedido n°6', description: 'Descrição muito legal', rate: 5.0, id: 6},
    ]);
    async function searchOrder(query = ''){
        return context.apiAuth().get('auth/order/search', {params: {query}})
        .then((res) => {
            setSearchs(res.data);
        });
    }
    return (
        <Layout barColor='#9949CA' padding={0} backgroundColor='rgb(230,230,230)' backgroundColorScoll='white' >
            <View style={styles.header}>
                <Label color="#fff">Pesquisa</Label>
                <View style={styles.search_container}>
                    <View style={styles.searchbar_container}>
                        <Searchbar onBlur={(e)=>{ searchOrder(e.target.value) }} style={styles.search_input}/>
                    </View>
                    <Pressable onPress={()=>{ searchOrder('a') }} style={styles.button_search}></Pressable>
                </View>
            </View>
            <View style={styles.container_searchs}>
                <Label size={27}>Resultados</Label>
                <View style={styles.search_result}>
                    <FlatList data={searchs} scrollEnabled={false} renderItem={(data, i)=>{
                        return( <Pedido key={i} order={data.item} /> )}} />
                </View>
            </View>
        </Layout>
    );
}