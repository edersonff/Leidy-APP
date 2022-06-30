import React from 'react';
import { Text, View, Pressable, Button } from 'react-native';
import styles from './AuthPage.style'
import { logo } from '../../styles/base'

export default function Loading() {
    return (
        <View style={styles.container}>
            <View style={styles.btns_container}>
                <Pressable style={styles.btn}>
                    <Text style={styles.btn_text}>LOGAR</Text>
                </Pressable>
                <Button title='Go to About'
                    onPress={() => props.navigation.navigate('AuthPage')}
                />
            </View>
        </View>
    );
}