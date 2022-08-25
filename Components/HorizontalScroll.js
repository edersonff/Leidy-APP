import {  View, ScrollView, StyleSheet, FlatList, Text } from 'react-native';

export default function HorizontalScroll({children, marginTop = 10, style, list, renderItem}){
    const styles = StyleSheet.create({
        menu: {
          flexGrow: 1,
        },
        menu_container:{
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexDirection: 'row',
            flex: 1,
            height: '100%',
        }, 
    })
    return(
        <View style={[{ marginTop }, style]} >
            <FlatList data={list} indicatorStyle={{color: 'red'}} renderItem={renderItem} showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={styles.menu} />
        </View>
    )
}