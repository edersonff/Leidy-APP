import React from 'react';
import Title from '../../Components/Title';
import styles from './Perfil.style'
import Layout from '../Layout/Layout'
import PerfilImage from '../../img/Perfil01.png';
import MapsImage from '../../img/Maps.png';
import ContainerG from '../../Components/ContainerG';
import { Dimensions, FlatList, Image, View } from "react-native";
import { Text, TouchableRipple, Modal, Portal } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import TextBoxTitle from '../../Components/TextBoxTitle/TextBoxTitle';
import Heart from '../../Components/Heart/Heart';
import Rate from '../../Components/Perfil/Rate/Rate';
import { useState } from 'react';
import Local from '../../Components/Pedido/Local/Local';
import HorizontalScroll from '../../Components/HorizontalScroll';
import CircleSelect from '../../Components/Select/Circle/CircleSelect';
import ImportantValue from '../../Components/Pedido/ImportantValue/ImportantValue';
import FillText from '../../Components/FillText/FillText';
const win = Dimensions.get('window');
export default function Perfil() {
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
                                <Title color='#000' weight='bold' >Nome do perfil</Title>
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
                    
                    <Portal>
                        <Modal contentContainerStyle={styles.rate_list_container_portal} style={styles.rate_list_container} onDismiss={close} visible={rateModal}>
                            <Text>Avaliação</Text>
                            <HorizontalScroll style={styles.rate_item_types} list={[{title: 'Boa'}, {title: 'Media'}, {title: 'Ruim'}]} renderItem={(data)=>{
                                const item = data.item;
                                return(<View style={styles.rate_item_type}><Text style={styles.rate_item_type_text}>{item.title}</Text></View>);
                            }} />
                            
                            <FlatList 
                                scroll      
                                EventThrottle={16}
                                showsHorizontalScrollIndicator={true} 
                                data={[{title: 'Boa'}, {title: 'Media'}, {title: 'Ruim'}, {title: 'Ruim'}, {title: 'Ruim'}]}
                                style={{width: '100%', marginTop: 20}}
                                renderItem={(data)=>{
                                    return(<Rate rate='5.0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Rate>)
                                }}
                            />
                        </Modal>
                    </Portal>
                </View>
            </View>
        </Layout>
    );

}