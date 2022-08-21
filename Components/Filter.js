import styled from 'styled-components/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Modal, Portal, Text } from 'react-native-paper';
import { useState } from 'react';
import { View } from 'react-native';

export default function Filter({options, title, first, last}){
    const [visible, setVisible] = useState(true);
  
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    return(
        <View style={[ 
            first ? {marginLeft: 0} : null , 
            last ? {marginRight: 0 } : null, 
            styles.container_filter
        ]}>
            <Button onPress={()=>{setVisible(!visible)}} contentStyle={styles.btn_container} style={styles.btn} labelStyle={styles.btn_label} icon="camera" mode="contained">
                {title}
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
    btn: {
        borderRadius: 10,
        backgroundColor: 'rgb(255,255,255)',
        position: 'relative',
        zIndex: 10,
    },
    btn_label:{
        color: 'gray',
        fontSize: 12,
        letterSpacing: 0
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
        margin: 10,
        overflow: 'visible',
    }
})