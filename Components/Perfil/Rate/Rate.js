import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TextBox from "../../TextBox";

export default function Rate({rate = '0.0', children}){
    
    function rateToColor(rate){
        const red = rate*200/5;
        const green = rate*200/5;
        return `rgb(${red}, ${green},0)`
    }
    return(
        <TouchableOpacity style={styles.rate_container}>
            <View style={styles.rate_number_container}>
                <Text style={[styles.rate_number, {color: rateToColor(parseFloat(rate))}]}>{rate}</Text>
            </View>
            <View style={styles.rate_text_container}>
                <TextBox size={15} color={'#A3A3A3'}>
                    {children}
                </TextBox>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    rate_container:{
        width: '100%',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#D4D4D4',
        paddingVertical: 10,
        marginVertical: 5
    },
    rate_number_container:{
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rate_number:{
        fontWeight: '700',
        fontSize: 40
    },
    rate_text:{
    },
    rate_text_container:{
        flex: 1
    }
});