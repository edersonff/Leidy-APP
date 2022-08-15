import React from 'react';
import { StyleSheet, View } from "react-native";

export default function LineBreak({color = '#E0E0E0', width = 90}){
    return(
        <View style={[styles.line, {backgroundColor: color, width: width+'%'}]} />
    );
}
const styles = StyleSheet.create({
    line:{
        height: 1,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})