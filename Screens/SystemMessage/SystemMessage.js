import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './SystemMessage.style'
import { logo } from '../../styles/base'
import { Button } from 'react-native';

export default function Loading(props) {
    return (
        <View style={styles.container}>
            <View style={styles.container_message}>
                <Text>
                    ADSADSADASDSADSA
                    sdaASDASDASDadsadsa
                    ASDadasdasdasdas
                    dasdasdasdasdasdas
                </Text>
            </View>
        </View>
    );
}