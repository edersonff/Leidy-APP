import React from 'react';
import Title from '../../Components/Title';
import styles from './Chat.style'
import Layout from '../Layout/Layout'
import PerfilImage from '../../img/Perfil01.png';
import MapsImage from '../../img/Maps.png';
import ContainerG from '../../Components/ContainerG';
import { Dimensions, Image, View } from "react-native";
import { Text } from 'react-native-paper';
import LineBreak from '../../Components/LineBreak/LineBreak';
import TextBoxTitle from '../../Components/TextBoxTitle/TextBoxTitle';
import Heart from '../../Components/Heart/Heart';
import BottomButton from '../../Components/BottomButton/BottomButton';
import UseLoader from '../../Context/loading/UseLoader';
import Ionicons from '@expo/vector-icons/Ionicons';
import CircleSelect from '../../Components/Select/Circle/CircleSelect';
import { navigate } from '../../Components/Util/navigation';
import ChatMessage from '../../Components/Chat/Message/ChatMessage';
const win = Dimensions.get('window');
export default function Chat({ route, navigation }) {
    const [Load, toggleLoad] = UseLoader();
    return (
        <Layout top={
            <View style={styles.head_container}>
                <Image source={MapsImage} style={styles.image_head}></Image>
                <Text style={styles.userName}>Nome do usúario</Text>
            </View>
        } padding={0} backgroundColorScoll='#ffffff' >
            <View style={styles.chat_container}>
                <ChatMessage date={"20/12/2004"} textColor={'#fff'} color={'blue'} right>
                AAAAAAAAAAAAAAAAAAAA
                </ChatMessage>
                <ChatMessage textColor={'#000'} color={'lightgreen'}>
                AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                </ChatMessage>
                <ChatMessage textColor={'#fff'} color={'blue'} right>
                AAAAAAAAAAAAAAAAAAAA
                </ChatMessage>
                <ChatMessage textColor={'#000'} color={'lightgreen'}>
                AAAAAAAAAAAAAAAAAAAA
                </ChatMessage>
                <ChatMessage textColor={'#fff'} color={'blue'} right>
                AAAAAAAAAAAAAAAAAAAA
                </ChatMessage>
                <ChatMessage textColor={'#000'} color={'lightgreen'}>
                AAAAAAAAAAAAAAAAAAAA
                </ChatMessage>
            </View>
        </Layout>
    );
}