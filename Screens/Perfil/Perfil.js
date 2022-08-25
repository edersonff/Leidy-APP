import React from 'react';
import Title from '../../Components/Title';
import Context from "../../Context";
import styles from './Perfil.style'
import Layout from '../Layout/Layout'
import PerfilImage from '../../img/Perfil01.png';
import MapsImage from '../../img/Maps.png';
import ContainerG from '../../Components/ContainerG';
import { Dimensions, Image, View } from "react-native";
import { Text, TouchableRipple, Modal, Portal } from 'react-native-paper';
import LineBreak from '../../Components/LineBreak/LineBreak';
import TextBoxTitle from '../../Components/TextBoxTitle/TextBoxTitle';
import Heart from '../../Components/Heart/Heart';
import Rate from '../../Components/Perfil/Rate/Rate';
import { useState } from 'react';
import HorizontalScroll from '../../Components/HorizontalScroll';
const win = Dimensions.get('window');
export default function Perfil({ route, navigation }) {
    const [ rateModal, setRateModal ] = useState(true);
    const showModal = () => setRateModal(true);
    const close = () => {setRateModal(false)}
    return (
        <Layout padding={0} backgroundColorScoll='#ffffff' >    
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
                        <Title color='#000' >Nome do usuario</Title>
                    </ContainerG>
                </View>
            </View>
            <ContainerG padding={16}>
                <View>
                    <View style={styles.main_status}>
                        <View style={styles.type_perfil}>
                            <Text style={styles.type_perfil_text}>Limpeza / lavação</Text>
                        </View>
                        <Heart />
                    </View>               
                    <LineBreak width={100} />
                    <ContainerG>
                        <TextBoxTitle title='Outros serviços' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam">
                        </TextBoxTitle>  
                        <TextBoxTitle title='Avaliações'>
                            <View style={styles.rates}>
                                <Rate rate='5.0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Rate>
                                <Rate rate='5.0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Rate>
                                <Rate rate='5.0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Rate>
                                <TouchableRipple style={styles.seeMore_container} onPress={()=>{ setRateModal(true) }}><Text>Ver mais</Text></TouchableRipple>
                            </View>
                        </TextBoxTitle>  
                        <TextBoxTitle title='Localização' text="Rua .... Lorem ipsum is placeholder text ">
                            <Image style={styles.maps} source={MapsImage} />
                        </TextBoxTitle>
                    </ContainerG>
                </View>
            </ContainerG>
            
            <Portal>
                <Modal contentContainerStyle={styles.rate_list_container_portal} style={styles.rate_list_container} onDismiss={close} visible={rateModal}>
                    <Text>Avaliação</Text>
                    <HorizontalScroll style={styles.rate_item_types} list={[{title: 'Boa'}, {title: 'Media'}, {title: 'Ruim'}]} renderItem={(data)=>{
                        const item = data.item;
                        return(<View style={styles.rate_item_type}><Text style={styles.rate_item_type_text}>{item.title}</Text></View>);
                    }} />
                </Modal>
            </Portal>
        </Layout>
    );
}