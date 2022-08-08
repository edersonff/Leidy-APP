import React from 'react';
import Title from '../../Components/Title';
import TextBox from '../../Components/TextBox';
import Context from "../../Context";
import { store } from "../../App";
import { useEffect } from 'react';
import { useState } from 'react';
import Layout from '../Layout/Layout';
import ContainerG from '../../Components/ContainerG';
import BackButton from '../../Components/BackButton';

export default function Pedido({ route, navigation }) {
    // const { id } = route.params;
    console.log(route);
    const context = Context(store);
    const [ orders, setorders ] = useState([]);
    useEffect(async ()=>{
        await context.apiAuth().get('auth/order/')
         .then((res) => {
             setorders(res.data);
         })
    }, []);
    return (
        <Layout padding={15} backgroundColorScoll='#ffffff' navigation={navigation}>
            <ContainerG padding={20}>   
                <BackButton go='Pedidos' navagation={navigation}/>
                <Title center={true}>
                    Sobre
                </Title>
                <TextBox padding={10}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </TextBox>
            </ContainerG>
        </Layout>
    );
}