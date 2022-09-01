import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView, Platform, StatusBar } from 'react-native';
import Navbar from '../../Components/Navbar';

export default function Layout({ top, children, padding = 20, backgroundColorScoll = '', margin = 0, onScroll, bottom, barColor = '#fff', center}) {
    return (
        <View style={styles.layout}>
            <View style={[styles.scrollBar, {backgroundColor: barColor}]} />
            {top}
            <View style={styles.center}>
                {center}
            </View>
            <ScrollView 
              scroll      
              EventThrottle={16}
              onScroll={onScroll}
              showsHorizontalScrollIndicator={false} 
              style={[{padding}, styles.container_scroll]} 
              contentContainerStyle={[styles.container, {backgroundColor: backgroundColorScoll, padding: margin}]}
            >
                {children}
            </ScrollView>
            {bottom}
            <Navbar />
        </View>
    );
}
const styles = StyleSheet.create({
    layout:{
        height: '100%',
    },
    scrollBar:{
        width: '100%',
        height: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: '#fff'
    },
    container: {
        width: '100%',
        minHeight: '90%',
    },
    container_scroll:{
        width: '100%',
        height: '85%'
    },
    container_layout:{
        width: '100%',
        flex: 1
    },
    center:{
        width: '100%',
        height: '100%',
        position: 'absolute',
    }
})