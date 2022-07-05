import styled from 'styled-components/native'
import { View } from 'react-native'
import Animation from '../Helpers/Animation';
import { useState, useEffect } from 'react';

export default function Input({secure, onChange, placeholder}){
    const [selected, setSelected] = useState(false);
    let top = Animation(0,50,250);
    useEffect(()=>{
        top.setValue(selected ? 50 : 0);
    }, [selected])
    return(
        <Container>
            <Label style={{top}}>{placeholder}</Label>
            <InputText onfocus={() => {  }} on secureTextEntry={secure} placeholderTextColor={'rgb(230,230,230)'} onChange={onChange} />
        </Container>
    )
}

const Container = styled.View`
    fontSize: 1.2em;
`
const Label = styled.Text`
    fontSize: 0.8em;
    color: rgb(200,200,200);
    position: relative;
`
const InputText = styled.TextInput`
    outlineStyle: none;
    padding: 13px 40px;
    textAlign: left;
    border-bottom-width: 1px;
    border-bottom-style : solid;
    border-bottom-color : #000;
`