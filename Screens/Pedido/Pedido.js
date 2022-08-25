import React from 'react';
import Title from '../../Components/Title';
import styles from './Pedido.style'
import Layout from '../Layout/Layout'
import PerfilImage from '../../img/teste.png';
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
import Local from '../../Components/Pedido/Local/Local';
import ImportantValue from '../../Components/Pedido/ImportantValue/ImportantValue';
import FillText from '../../Components/FillText/FillText';
const win = Dimensions.get('window');
export default function Pedido({ route, navigation }) {
    const [Load, toggleLoad] = UseLoader();
    return (
        <Layout padding={0} backgroundColorScoll='#ffffff'  bottom={<><BottomButton onPress={()=>{toggleLoad()}}>Receber Pedido</BottomButton>{Load}</>}>    
        {/* <BackButton go='Pedidos' navagation={navigation}/> */}
            <View style={styles.title_container}>
                <Image
                    style={{
                        width: '100%',
                        height: win.width*0.7,
                        resizeMode: "cover",
                        alignSelf: "center",
                        borderRadius: 10,
                    }}
                    source={PerfilImage}
                />
                <View style={styles.icons}>
                    <CircleSelect onPress={()=>{navigate('Chat')}}>
                        <Ionicons name='chatbubbles-outline' size={30} />
                    </CircleSelect>
                    <Heart />
                </View>
            </View>
            <View style={styles.content}>
                <View>
                    <View style={styles.main_status}>
                        <View style={styles.price_container}>
                            <View style={{justifyContent: 'center', alignItems: 'center', padding: 20}}>
                                <Title color='#000' weight='bold' >Nome do serviço</Title>
                                <Local locate={'R. Waldemar rau 141'} />
                            </View>
                            <View style={styles.important_values}>
                                <ImportantValue title="R$14">por hora</ImportantValue>
                                <ImportantValue title="R$14">por hora</ImportantValue>
                                <FillText color={'lightgreen'}>+20% bonus</FillText>
                            </View>
                        </View>
                    </View>
                    
                    <ContainerG padding={15}>
                        <TextBoxTitle title='Descrição' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam">
                        </TextBoxTitle>  
                        <TextBoxTitle title='Bonificação' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam">
                        </TextBoxTitle>  
                        <TextBoxTitle title='Localização' text="Rua .... Lorem ipsum is placeholder text ">
                            <Image style={styles.maps} source={MapsImage} />
                        </TextBoxTitle>
                    </ContainerG>
                </View>
            </View>
        </Layout>
    );
}