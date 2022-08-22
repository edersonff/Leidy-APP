import { StyleSheet, Text, View, Image } from "react-native";

export default function ChatMessage({color, textColor, date, children, right}){
    return(
        <View style={{flex: 1, flexDirection: 'column', alignItems: right ? 'flex-end' : 'flex-start'}}>
            <View style={[
                styles.chat_container,
                {backgroundColor: color},
                right ? {borderTopRightRadius: 0} : {borderTopLeftRadius: 0}
            ]}>
                <Image source={''} style={styles.perfil_image} />
                <Text style={[styles.text,{color: textColor}]}>{children}</Text>
            </View>
            <Text style={[styles.date]} >{date}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    chat_container:{
        minWidth: '40%',
        padding: 10,
        borderRadius: 15,
        marginBottom: 10,
        maxWidth: '60%',
    },
    date:{
        color: 'black',
        fontSize: 10
    },
    text:{

    }
});