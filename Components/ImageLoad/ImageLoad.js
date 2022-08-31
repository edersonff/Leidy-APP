import { useState } from "react";
import { ActivityIndicator, Image, StyleSheet, View } from "react-native";

export default function ImageLoad({style, source}){
    const [ load, setLoad ] = useState(true);
    return(
        <View style={[style, styles.container]}>
            {load ? (
                <ActivityIndicator size={70} />
            ) : null}
            <Image style={styles.image} source={source} 
                onLoadStart={()=>{setLoad(true)}} 
                onLoadEnd={()=>{setLoad(false)}}
            ></Image>
        </View>
    )
}
const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2'
    }
})