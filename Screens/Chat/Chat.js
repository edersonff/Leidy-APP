import React from 'react';
import styles from './Chat.style'
import Layout from '../Layout/Layout'
import MapsImage from '../../img/Maps.png';
import { Image, View } from "react-native";
import { Text, TextInput } from 'react-native-paper';
import UseLoader from '../../Context/loading/UseLoader';
import Ionicons from '@expo/vector-icons/Ionicons';
import CircleSelect from '../../Components/Select/Circle/CircleSelect';
import ChatMessage from '../../Components/Chat/Message/ChatMessage';
import { useEffect } from 'react';

export default function Chat({ route, navigation }) {
    const [Load, toggleLoad] = UseLoader();
    useEffect(()=>{
        toggleLoad();
    }, [])
    return (
        <Layout 
        top={
            <View style={styles.head_container}>
                <Image source={MapsImage} style={styles.image_head}></Image>
                <Text style={styles.userName}>Nome do usúario</Text>
            </View>
        } 
        center={
            <>
                {Load}
            </>
        }
        bottom={
            <View style={styles.chat_textInput_container}>
                <TextInput style={styles.chat_textInput}></TextInput>
                <CircleSelect style={styles.chat_textInput_send} styleContent={styles.chat_textInput_send_content} onPress={()=>{}}>
                    <Ionicons name='send' size={25} /> 
                </CircleSelect>
                <CircleSelect style={styles.chat_textInput_attach} styleContent={styles.chat_textInput_send_content} onPress={()=>{}}>
                    <Ionicons name='attach' size={25} /> 
                </CircleSelect>
            </View>
        }
        padding={0} backgroundColorScoll='#ffffff' >
            <View style={styles.chat_container}>
                <ChatMessage date={"20/12/2004"} textColor={'#fff'} color={'blue'} right>
                Azul
                </ChatMessage>
                <ChatMessage date={"20/12/2004"} textColor={'#fff'} color={'blue'} right>
                Azul
                </ChatMessage>
                <ChatMessage date={"20/12/2004"} textColor={'#fff'} color={'blue'} right>
                Azul
                </ChatMessage>
                <ChatMessage date={"20/12/2004"} textColor={'#fff'} color={'blue'} right>
                Azul
                </ChatMessage>
                <ChatMessage date={"20/12/2004"} textColor={'#000'} color={'#01FF52'}>
                Azul
                </ChatMessage>
                <ChatMessage date={"20/12/2004"} textColor={'#fff'} color={'blue'} right>
                Azul
                </ChatMessage>
                <ChatMessage date={"20/12/2004"} textColor={'#000'} color={'#01FF52'}>
                Azul
                </ChatMessage>
                <ChatMessage date={"20/12/2004"} textColor={'#fff'} color={'blue'} right>
                Azul
                </ChatMessage>
                <ChatMessage date={"20/12/2004"} textColor={'#000'} color={'#01FF52'}>
                Azul
                </ChatMessage>
            </View>
        </Layout>
    );
}