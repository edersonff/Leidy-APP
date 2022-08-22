import React from 'react';
import Title from '../../Components/Title';
import styles from './Pedido.style'
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
                        height: win.width*0.5,
                        resizeMode: "cover",
                        alignSelf: "center",
                        borderRadius: 10,
                    }}
                source={PerfilImage}
                />
                <View>
                    <ContainerG style={{marginLeft: 16}}>
                        <Title color='#000' >Nome do serviço</Title>
                    </ContainerG>
                </View>
            </View>
            <ContainerG padding={16}>
                <View>
                    <View style={styles.main_status}>
                        <View style={styles.price_container}>
                            <Text style={styles.price}>R$ 14/h</Text>
                            <Text style={styles.bonus}>+20% bonus</Text>
                        </View>
                        <View style={styles.icons}>
                            <CircleSelect onPress={()=>{navigate('Chat')}}>
                                <Ionicons name='chatbubbles-outline' size={30} />
                            </CircleSelect>
                            <Heart />
                        </View>
                    </View>               
                    <LineBreak width={100} />
                    <ContainerG>
                        <TextBoxTitle title='Descrição' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam">
                        </TextBoxTitle>  
                        <TextBoxTitle title='Bonificação' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam">
                        </TextBoxTitle>  
                        <TextBoxTitle title='Localização' text="Rua .... Lorem ipsum is placeholder text ">
                            <Image style={styles.maps} source={MapsImage} />
                        </TextBoxTitle>
                    </ContainerG>
                </View>
            </ContainerG>
        </Layout>
    );
}