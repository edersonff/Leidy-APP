import React from 'react';
import { View, Image, Text } from 'react-native';
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
    const [searchs, setSearchs] = useState([]);
    async function searchOrder(query = ''){
        return await context.apiAuth().get('auth/order/search', {params: {query}})
        .then((res) => {
            setSearchs(res.data);
        });
    }
    useEffect(async ()=>{
        await searchOrder();
    }, []);
    return (
        <Layout padding={0} backgroundColor='rgb(230,230,230)' backgroundColorScoll='white' >
            <View style={styles.container_searchs}>
                <View style={styles.container_search}>
                    <Searchbar onBlur={async(e)=>{ await searchOrder(e.target.value) }} style={styles.search_input}/>
                </View>
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