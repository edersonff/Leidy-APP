import { Image, Pressable, TouchableOpacity, View } from "react-native";
import Title from '../../Title';
import TextBox from '../../TextBox';
import { StyleSheet } from "react-native";
import image from '../../../img/Rosquinha.jpg';
import Ionicons from '@expo/vector-icons/Ionicons';
import { navigate } from "../../Util/navigation";

export default function Pedido({order}){
    return(
        <TouchableOpacity onPress={()=>{ navigate('Pedido', {id: order.id}) }} style={styles.container_pedido}>
            <View style={styles.pedido_foto_container}>
                <Image style={styles.pedido_foto} source={image}/>
            </View>
            <View style={styles.info}>
                <Title size={20} color={'#9955CA'} style={styles.title} weight={'bold'}>{order.title}</Title>
                <TextBox size={17} color={'#7755CA'} style={styles.textbox}>{order.rate ? (<>{order.rate} <Ionicons size={20} name="star" style={styles.star} /> - </>) : null}{order.description}</TextBox>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container_pedido: {
        marginBottom: 20,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    title:{
        width: '100%',
    },
    pedido_foto_container:{
        width: 100,
        height: 100,
        marginRight: 15,
    },
    pedido_foto:{
        width: '100%',
        height: '100%',
        borderRadius: 40,
    },
    info:{
        width: '100%',
        height: '70%',
        alignItems: 'center',
    },
    star:{
        color: '#ff9933'
    }
});