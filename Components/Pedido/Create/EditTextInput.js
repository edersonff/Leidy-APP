import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default function EditTextInput({children, width = 100, nLines}){
    return(
        <TextInput 
            underlineColor={'#fff'} 
            label={children} 
            mode="outlined" 
            style={
                [styles.input, {width: width+'%', height: nLines ? nLines*20 : '100%' }]
            }
            multiline={nLines ? true : false}
            numberOfLines={nLines}
            theme={{
                colors: {
                           placeholder: 'rgb(170,170,170)', text: 'rgb(50,50,50)', primary: 'rgb(120,120,120)',
                   }
             }}
        ></TextInput>
    )
}
const styles = StyleSheet.create({
    input:{
        backgroundColor: 'transparent',
    },
});