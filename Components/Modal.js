import React, { useState } from 'react';
import { Modal, Portal, Text } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, StyleSheet } from 'react-native';

export default function ModalGeneral({ visible, close, image }){
    return(
        <Portal>
            <Modal visible={visible} style={styles.portal} onDismiss={close} contentContainerStyle={styles.modal}>
                <Ionicons style={styles.close_modal} size={30} color="rgb(230,230,230)" onPress={close} name="close"/>
                {image ? (
                    <Image source={image} style={styles.image_modal}/>
                ) : (<></>)}
            </Modal>
        </Portal>
    )
}
const styles = StyleSheet.create({
    modal:{
        padding: 0, 
        borderRadius: 15,
        width: '90%',
        minHeight: '50%',
        position: 'relative',
        overflow: 'hidden',
      },
      portal:{
        justifyContent:'center',
        alignItems: 'center',
      },
      close_modal:{
        position: 'absolute',
        top: 10,
        right: 10,
      },
      image_modal:{
        minWidth: '100%',
        minHeight: '100%',
        position: 'absolute',
        zIndex: -1
      },  
})
