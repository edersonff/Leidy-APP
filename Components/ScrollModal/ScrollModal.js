import { Button, Dimensions, FlatList, ScrollView, StyleSheet, View } from "react-native";
import ScrolModalItem from "./Item/ScrolModalItem";

export default function ScrollModal({imgs}){
    return(
        <ScrollView
            showsHorizontalScrollIndicator={true} 
            horizontal
            pagingEnabled
            style={styles.scroll}
            contentContainerStyle={styles.content_scroll}
        >
        <ScrolModalItem/>
            <ScrolModalItem/>
            <ScrolModalItem/>
            <ScrolModalItem/>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    content_scroll:{
        flex: 1,
    },
    scroll:{
        width: 250,
        height: 100,
        backgroundColor:'black',
        position: 'absolute',
        right:0,
        zIndex: 100,
        flex: 1,
    },
});