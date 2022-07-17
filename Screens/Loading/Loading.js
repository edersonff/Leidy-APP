import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './Loading.style'
import { logo } from '../../styles/base'
import { Button } from 'react-native';

export default function Loading(props) {
    useEffect(()=>{
        setTimeout(()=>{
            props.navigation.navigate('AuthPage');
        }, 1000)
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.container_image}>
                <Image style={styles.image} source={logo} />
            </View>
            <Text>{process.env.APP_NAME}</Text>
        </View>
    );
}