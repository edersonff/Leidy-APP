import React from 'react';
import { View, Image } from 'react-native';
import styles from './Perfil.style'
import PerfilImage from '../../img/Perfil01.png';
import Navbar from '../../Components/Navbar';
import Title from '../../Components/Title';
import TextBox from '../../Components/TextBox';
import Context from "../../Context";
import { store } from "../../App";
import ContainerG from '../../Components/ContainerG';
import { useEffect } from 'react';
import { useState } from 'react';
import Layout from '../Layout/Layout';
export default function Perfil({ navigation }) {
    const context = Context(store);
    const [ perfilData, setperfilData ] = useState({});
    useEffect(async ()=>{
        await context.apiAuth().get('auth/client')
      .then((res) => {
        setperfilData(res.data[0]);
      })
    }, []);
    return (
        <Layout padding={0} backgroundColor='rgb(240,240,240)' navigation={navigation}>
            <Title center={true} weight={'normal'} size={24} >
                Pefil
            </Title>
            <View style={styles.container}>
                <View style={styles.perfil_foto}>
                    <Image style={styles.foto} source={PerfilImage} />
                    <Title style={{marginTop: 10}} weight={'normal'} center={true} >
                        {perfilData.name}
                    </Title>
                </View>
                <View style={styles.perfil_desc}>
                    <ContainerG padding={20}>
                        <Title center={true}>
                            Sobre
                        </Title>
                        <TextBox padding={10}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </TextBox>
                    </ContainerG>
                    
                    <ContainerG padding={20}>
                        <Title center={true}>
                            Sobre
                        </Title>
                        <TextBox padding={10}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </TextBox>
                    </ContainerG>
                </View>
            </View>
        </Layout>
    );
}