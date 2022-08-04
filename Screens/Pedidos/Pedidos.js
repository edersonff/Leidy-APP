import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './Pedidos.style'
import Context from "../../Context";
import { store } from "../../App";
import { useEffect } from 'react';
import { useState } from 'react';
import Pedido from '../../Components/Pedido';
import Layout from '../Layout/Layout';
export default function Pedidos({ navigation }) {
    const context = Context(store);
    const [ orders, setorders ] = useState([]);
    useEffect(async ()=>{
        await context.apiAuth().get('auth/order')
      .then((res) => {
        setorders(res.data);
      })
    }, []);
    return (
        <Layout padding={5} backgroundColor='rgb(240,240,240)' navigation={navigation}>
            <View style={styles.container_pedidos}>
                {orders.map((order, i)=>{
                    return(
                        <Pedido key={i} order={order} />
                    )
                })}
            </View>
        </Layout>
    );
}