import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './SystemMessage.style'
import { logo } from '../../styles/base'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Loading(props) {
    return (
        <View style={styles.container}>
            <View style={styles.goback_container}>
                <TouchableOpacity onPress={()=>{ props.navigation.goBack() }} style={styles.goback}>
                    <Ionicons name="caret-back-outline" size={23} />
                </TouchableOpacity>
            </View>
            <View style={styles.container_message}>
                <Text style={styles.title}>
                    ADSADSADASDSADSA
                </Text>
                <Text style={styles.paragraf}>
                Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                </Text>
            </View>
        </View>
    );
}