import React from 'react';
import { View, StyleSheet, ScrollView, Platform, StatusBar } from 'react-native';
import Navbar from '../../Components/Navbar';
import VerticalScroll from '../../Components/VerticalScroll';

export default function Layout({ navigation, children, padding = 20, backgroundColorScoll = '', margin = 0}) {
    return (
        <View style={styles.layout}>
            <ScrollView showsHorizontalScrollIndicator={false} style={[{padding}, styles.container_scroll]} contentContainerStyle={[styles.container_layout, {backgroundColor: backgroundColorScoll, padding: margin}]} >
                {children}
            </ScrollView>
            <Navbar navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    layout:{
        flex: 1
    },
    container: {
        width: '100%',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    container_scroll:{
        width: '100%',
        height: 0,
    },
    container_layout:{
        width: '100%',
        flex: 1
    }
})