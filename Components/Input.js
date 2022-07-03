import styled from 'styled-components/native'
import { View } from 'react-native'

export default function Input({secure, name, onChange, placeholder}){
    return(
        <Container>
            <Label>{name}</Label>
            <InputText secureTextEntry={secure} placeholderTextColor={'rgb(230,230,230)'} onChange={onChange} placeholder={placeholder} />
        </Container>
    )
}

const Container = styled.View`
    fontSize: 1.2em;
`
const Label = styled.Text`
    fontSize: 1em;
    color: rgb(100,100,100);
`
const InputText = styled.TextInput`
    outlineStyle: none;
    padding: 13px 40px;
    textAlign: center;
    border-bottom-width: 1px;
    border-bottom-style : solid;
    border-bottom-color : #000;
`