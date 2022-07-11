import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './Perfil.style'
import Perfil from '../../img/Perfil01.png';
import Navbar from '../../Components/Navbar';
export default function Loading({ navigation }) {
    const [ menuSelected, setMenuSelected] = useState(0);
    return (
        <>
            <ScrollView style={styles.container}>
                <Text style={styles.address}>R. address, number</Text>
            </ScrollView>
            <Navbar navigation={navigation} />
        </>
    );
}