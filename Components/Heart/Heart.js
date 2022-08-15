import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
export default function Heart(){
    const [ hearth, setHearth ] = useState(false);
    const changeHearth = () => { setHearth(!hearth); }
    return(
        <Ionicons onPress={()=>{ changeHearth() }} style={styles.heart} name={hearth ? 'heart' : 'heart-outline'} size={30}/>  
    )
}
const styles = StyleSheet.create({ 
  heart:{
    color: 'pink'
  }
})