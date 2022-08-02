import {  View, ScrollView, StyleSheet } from 'react-native';

export default function VerticalScroll({children, style}){
    return(
        <View style={style}>
            <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.menu}>
                <View style={ styles.menu_container }>
                    {children}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
      height: '100%',
      width: '100%',
      alignItems: 'center'
    },
    menu_container:{
        alignItems: 'center',
        flex: 1,
        width: '100%',
    }, 
})