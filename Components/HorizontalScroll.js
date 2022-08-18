import {  View, ScrollView, StyleSheet } from 'react-native';

export default function HorizontalScroll({children, marginTop = 10, style, data}){
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
            <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={styles.menu}>
                <View style={ styles.menu_container }>
                    {children}
                </View>
            </ScrollView>
        </View>
    )
}