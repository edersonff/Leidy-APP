import styled from 'styled-components/native'
import { StyleSheet, Text, View } from 'react-native'
import Animation from '../Helpers/Animation';
import { useState, useEffect } from 'react';

export default function Input({secure, onChange, placeholder}){
    const [selected, setSelected] = useState(false);
    let top = Animation(0,50,250);
    useEffect(()=>{
        top.setValue(selected ? 50 : 0);
    }, [selected])
    return(
        <View style={styles.container}>
            <Text style={[{top}, styles.label]}>{placeholder}</Text>
            <InputText style={styles.inputText} onfocus={() => {  }} on secureTextEntry={secure} placeholderTextColor={'rgb(230,230,230)'} onChange={onChange} />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        fontSize: '1.2em',
    },
    label:{
        fontSize: '0.8em',
        color: 'rgb(200,200,200)',
        position: 'relative',
    },
    inputText:{
        outlineStyle: 'none',
        textAlign: 'left',
        borderBottomWidth: 1,
        borderBottomStyle : 'solid',
        borderBottomColor : '#000',
    },
})

const InputText = styled.TextInput`
    padding: 13px 40px;
`