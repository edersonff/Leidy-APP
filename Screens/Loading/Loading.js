import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './Loading.style'
import { logo } from '../../styles/base'
import { Button } from 'react-native';

export default function Loading(props) {
    return (
        <View style={styles.container}>
            <View style={styles.container_image}>
                <Image style={styles.image} source={logo} />
            </View>
            <Button title='Go to About'
                onPress={() => props.navigation.navigate('AuthPage')}
            />
            <Text>NAME</Text>
        </View>
    );
}