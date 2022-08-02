import { View } from "react-native";
import Title from './Title';
import TextBox from './TextBox';
import { StyleSheet, StatusBar } from "react-native";

export default function Pedido({order}){
    return(
        <View style={styles.container_pedido}>
            <View style={styles.pedido_foto}>
            </View>
            <Title weight={'normal'}>{order.title}</Title>
            <TextBox>{order.description}</TextBox>
        </View>
    )
}

const styles = StyleSheet.create({
    container_pedido: {
        paddingTop: StatusBar.currentHeight,
        padding: 20,
        marginBottom: 20,
        width: '100%',
        backgroundColor: '#fff'
    },
});