import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './Pedidos.style'
import Context from "../../Context";
import { useEffect } from 'react';
import { useState } from 'react';
import Layout from '../Layout/Layout';
import { store } from '../../Context/context';
export default function Pedidos() {
    const context = Context(store);
    const [ orders, setorders ] = useState([]);
    useEffect(async ()=>{
    //     await context.apiAuth().get('auth/order')
    //   .then((res) => {
    //     setorders(res.data);
    //   })
    }, []);
    return (
        <Layout padding={5} backgroundColor='rgb(240,240,240)' >
            <View style={styles.container_pedidos}>
                {/* <Pedido order={'order'} />
                <Pedido order={'order'} />
                <Pedido order={'order'} /> */}
                {/* {orders.map((order, i)=>{
                    return(
                        <Pedido key={i} order={order} />
                    )
                })} */}
            </View>
        </Layout>
    );
}