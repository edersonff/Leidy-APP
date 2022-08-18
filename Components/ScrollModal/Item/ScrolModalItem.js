import { StyleSheet, View } from "react-native";

export default function ScrolModalItem(){
    return(
        <View style={styles.container} />
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
        marginRight: 10
    }
});