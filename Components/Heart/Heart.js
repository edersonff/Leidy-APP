import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import CircleSelect from '../Select/Circle/CircleSelect';
export default function Heart(){
    const [ hearth, setHearth ] = useState(false);
    const changeHearth = () => { setHearth(!hearth); }
    return(
      <CircleSelect color='#9999999' onPress={()=>{changeHearth()}}>
        <Ionicons style={styles.heart} name={hearth ? 'heart' : 'heart-outline'} size={30}/>  
      </CircleSelect>
    )
}
const styles = StyleSheet.create({ 
  heart:{
    color: '#c53c3c'
  },
})