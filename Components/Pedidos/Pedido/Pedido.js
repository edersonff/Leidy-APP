import { Pressable, View } from "react-native";
import Title from '../../Title';
import TextBox from '../../TextBox';
import { StyleSheet, StatusBar } from "react-native";

export default function Pedido({order, navagation}){
    return(
        <Pressable onPress={()=>{}} style={styles.container_pedido}>
            <View style={styles.pedido_foto}>
            </View>
            <Title style={styles.title} weight={'normal'}>{order.title}</Title>
            <TextBox style={styles.textbox}>{order.description}</TextBox>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container_pedido: {
        padding: 20,
        marginBottom: 20,
        width: '100%',
        backgroundColor: 'black'
    },
    title:{
        width: '100%',
        textAlign: 'center',
        backgroundColor: 'red'
    }
});