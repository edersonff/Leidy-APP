import React, { useState } from 'react';
import { Modal, Portal, Text } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlatList, Image, StyleSheet, View } from 'react-native';

export default function ModalGeneral({ image, children, style, carousels }){
    const [visible, setVisible] = useState(true);

    const showModal = () => setVisible(true);
    const close = () => {setVisible(false)}
    return(
        <Portal>
            <Modal visible={visible} style={[styles.portal, style]} onDismiss={close} contentContainerStyle={styles.modal}>
                <Ionicons style={styles.close_modal} size={30} color="rgb(230,230,230)" onPress={close} name="close"/>
                  {children}
                  {carousels ? (
                    <FlatList 
                      pagingEnabled horizontal data={carousels} style={styles.carousel} contentContainerStyle={styles.carousel_content} renderItem={(carousel)=>{
                      return(
                        <View style={styles.carousel_image_container}>
                          {/* <Image source={image} style={styles.carousel_image}/> */}

                        </View>
                      )
                    }} />
                  ) : null }
                  {/* {image ? (
                      <Image source={image} style={styles.image_modal}/>
                  ) : null } */}
            </Modal>
        </Portal>
    )
}
const styles = StyleSheet.create({
    modal:{
        padding: 0, 
        borderRadius: 15,
        width: '90%',
        height: '50%',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#fff'
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
      carousel:{
        backgroundColor: 'blue',
        flex: 1,
      },
      carousel_content:{
        // width: '100%',
        // backgroundColor: 'orange',
      },
      carousel_image_container:{
        backgroundColor: 'orange',
        width: 320,
        marginRight: 10,

      },
      carousel_image:{
      },
})
