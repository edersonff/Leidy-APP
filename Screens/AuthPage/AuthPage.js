import React from 'react';
import { Text, View, Pressable, Button } from 'react-native';
import styles from './AuthPage.style'
import { logo } from '../../styles/base'

export default function Loading(props) {
    return (
        <View style={styles.container}>
            <View style={styles.btns_container}>
                <Pressable style={styles.btn}>
                    <Text style={styles.btn_text}>LOGAR</Text>
                </Pressable>
            <Button style={styles.btn} title='Go to About'
                onPress={() => props.navigation.navigate('Loading')}
            />
            </View>
            <View style={styles.form}>
                <View style={styles.form_control}>
                <label htmlFor="email">Email</label>
                <input name="email" type="text" />

                </View>
            </View>
        </View>
    );
}