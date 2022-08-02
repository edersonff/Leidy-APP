import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './Busca.style'
import Context from "../../Context";
import { store } from "../../App";
import { useEffect } from 'react';
import { useState } from 'react';
import Pedido from '../../Components/Pedido';
import { Searchbar } from 'react-native-paper';
import Layout from '../Layout/Layout';

export default function Busca({ navigation }) {
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
        <Layout backgroundColor='rgb(230,230,230)' backgroundColorScoll='white' navigation={navigation}>
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