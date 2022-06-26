import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './Loading.style'
import { logo } from '../../styles/base'

export default function Loading(props) {
    return (
        <View style={styles.container}>
            <View style={styles.container_image}>
                <Image style={styles.image} source={logo} />
            </View>
            <Text>NAME</Text>
        </View>
    );
}