import styled from 'styled-components/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Modal, Portal, Text } from 'react-native-paper';
import { useState } from 'react';
import { View } from 'react-native-web';

export default function Filter({options, title}){
    const [visible, setVisible] = useState(true);
  
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    console.log(options);
    return(
        <View style={styles.container_filter}>
            <Button color='#c0c0c0' onPress={()=>{setVisible(!visible)}} style={styles.btn_container} icon="camera" mode="contained">
                <FilterContainer>
                    <FilterText>{title}</FilterText>
                    {options ? (<Ionicons color='#A0A0A0' style={{display: 'flex', alignItems: 'center' }} name="chevron-down-outline" size={10} />) : (<></>) }
                </FilterContainer>
            </Button>
            {options ? (
                <View style={[styles.modal_container, {display: visible ? 'flex' : 'none'}]}>
                    {options.map((option)=>{
                        <View style={styles.modal_option}>
                            <Text>option</Text>
                        </View>
                    })}
                </View>
            ) : (<></>)}
        </View>
    )
}
const styles = StyleSheet.create({
    btn_container: {
        borderRadius: '25px',
        backgroundColor: 'rgb(250,250,250)',
        position: 'relative',
        zIndex: 10,
    },
    modal_container:{
        width: '100%',
        backgroundColor: 'white',
        height: 500,
        position: 'absolute',
        top: '50%',
        zIndex: 5,
        left: 0,
    },
    modal_option:{
        backgroundColor: 'black'
    },
    container_filter:{
        position: 'relative',
        margin: '10px',
        overflow: 'visible',
    }
})
const FilterContainer = styled.View`
    box-sizing: border-box;
    flex-direction: row;
    align-items: center;
`
const FilterText = styled.Text`
    color: #A0A0A0;
    font-size: 10px;
`
const ModalItem = styled.Text`
    width: 100%;
    text-align: center;
`
const Container = styled.View`
    position: relative;
    overflow: visible;
`