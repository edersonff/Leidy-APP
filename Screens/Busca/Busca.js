import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import styles from './Busca.style'
import Context from "../../Context";
import { useEffect } from 'react';
import { useState } from 'react';
import Pedido from '../../Components/Pedidos/Pedido/Pedido';
import { Searchbar } from 'react-native-paper';
import Layout from '../Layout/Layout';
import { store } from '../../Context/context';
export default function Busca() {
    let context = Context(store);
    const [searchs, setSearchs] = useState([
        {title: 'AAA', description: 'good', },
        {title: 'AAA', description: 'good', },
        {title: 'AAA', description: 'good', },
        {title: 'AAA', description: 'good', },
        {title: 'AAA', description: 'good', },
        {title: 'AAA', description: 'good', },
    ]);
    async function searchOrder(query = ''){
        return context.apiAuth().get('auth/order/search', {params: {query}})
        .then((res) => {
            setSearchs(res.data);
        });
    }
    return (
        <Layout barColor='red' padding={0} backgroundColor='rgb(230,230,230)' backgroundColorScoll='white' >
            <View style={styles.search_container}>
                <View style={styles.searchbar_container}>
                    <Searchbar onBlur={(e)=>{ searchOrder(e.target.value) }} style={styles.search_input}/>
                </View>
                <Pressable onPress={()=>{ searchOrder('a') }} style={styles.button_search}></Pressable>
            </View>
            <View style={styles.container_searchs}>
                <View style={styles.search_result}>
                    {searchs.map((search, i)=>{
                        return(
                            <Pedido key={i} order={search} />
                        )
                    })}
                </View>
            </View>
        </Layout>
    );
}