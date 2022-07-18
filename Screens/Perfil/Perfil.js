import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import styles from './Perfil.style'
import Perfil from '../../img/Perfil01.png';
import Navbar from '../../Components/Navbar';
export default function Loading({ navigation }) {
    const [ menuSelected, setMenuSelected] = useState(0);
    return (
        <>
            <View style={styles.container}>
                <View style={styles.perfil_foto}>
                    <Image style={styles.foto} source={Perfil} />
                </View>
                <View style={styles.perfil_desc}></View>
            </View>
            <Navbar navigation={navigation} />
        </>
    );
}