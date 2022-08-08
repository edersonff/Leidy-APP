import { StyleSheet, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function BackButton({go, navagation}){
    const styles = StyleSheet.create({
        back_btn:{
            color: 'white'
        },
        back_container:{
            width: 40,
            height: 40,
            backgroundColor: 'gray',
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            position: "absolute",
            zIndex: 10,
            cursor: 'pointer'
        }
    })
    
    return(
        <TouchableOpacity onPress={()=>{ navagation.goBack() }} style={styles.back_container}>
            <Ionicons style={styles.back_btn} name='arrow-back' size={20}/>
        </TouchableOpacity>
    )
}
