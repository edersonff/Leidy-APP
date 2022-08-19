import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";

export default function EditTextInput({children, width = 100, nLines, marginH = 0}){
    return(
        <View style={[styles.container, {width: width+'%', paddingHorizontal: marginH}]}>
            <TextInput 
                underlineColor={'#fff'} 
                label={children} 
                mode="outlined" 
                style={
                    [styles.input, {height: 0}]
                }
                multiline={nLines ? true : false}
                numberOfLines={nLines}
                theme={{
                    colors: {
                                placeholder: 'rgb(170,170,170)', text: 'rgb(50,50,50)', primary: 'rgb(120,120,120)',
                        }
                    }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    input:{
        backgroundColor: 'transparent',
        width: '100%'
    },
    container:{
        width: '100%'
    }
});