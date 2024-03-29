import React from 'react';
import Context from "../../../Context";
import { store } from '../../../Context/context';
import styles from './PedidoBought.style'
import Layout from '../../Layout/Layout'
import ContainerG from '../../../Components/ContainerG';
import { Dimensions, View } from "react-native";
import { Text, TouchableRipple } from 'react-native-paper';
import LineBreak from '../../../Components/LineBreak/LineBreak';
import TextBoxTitle from '../../../Components/TextBoxTitle/TextBoxTitle';
import Ionicons from '@expo/vector-icons/Ionicons';
import BottomButton from '../../../Components/BottomButton/BottomButton';
import EditTextInput from '../../../Components/Pedido/Create/EditTextInput';
const win = Dimensions.get('window');

export default function PedidoBought({ route, navigation }) {
    // const { id } = route.params;=
    const context = Context(store);
    // useEffect(async ()=>{
    //     await context.apiAuth().get('auth/order/')
    //      .then((res) => {
    //          setorders(res.data);
    //      })
    // }, []);
    return (
        <Layout padding={0} backgroundColorScoll='#ffffff'  bottom={<BottomButton>Criar Pedido</BottomButton>}>    
        {/* <BackButton go='Pedidos' navagation={navigation}/> */}
            <View style={styles.title_container}>
                <TouchableRipple
                    style={styles.imageUpload}
                    onPress={() => {}}
                    rippleColor="rgba(0, 0, 0, .2)"
                >
                    <Ionicons style={styles.downloadIcon} name='download' size={50}/>
                </TouchableRipple>
                <View>
                    <ContainerG>
                        <EditTextInput marginH={15} >Nome do serviço</EditTextInput>
                    </ContainerG>
                </View>
            </View>
            <ContainerG padding={16}>
                <View>
                    <View style={styles.main_status}>
                        <View style={styles.price_container}>
                            <Text style={styles.price}>R$<EditTextInput height={30} marginH={15} width={40}>Preço</EditTextInput>/h</Text>
                        </View>
                    </View>               
                    <LineBreak width={100} />
                    <ContainerG>
                        <TextBoxTitle title='Descrição'>
                            <EditTextInput nLines={5} width={100}>Descrição</EditTextInput>
                        </TextBoxTitle>  
                        <TextBoxTitle title='Bonificação'>
                            <EditTextInput nLines={5} width={100}>Bonificação</EditTextInput>
                        </TextBoxTitle>  
                        <TextBoxTitle title='Localização' text="Rua .... Lorem ipsum is placeholder text ">

                        </TextBoxTitle>
                    </ContainerG>
                </View>
            </ContainerG>
        </Layout>
    );
}