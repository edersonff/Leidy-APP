import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
export default function Heart(){
    const [ hearth, setHearth ] = useState(false);
    const changeHearth = () => { setHearth(!hearth); }
    return(
      <View style={styles.touchable_container}>
        <TouchableRipple rippleColor='#dddddd' onPress={()=>{ changeHearth() }} style={styles.heart_container}>
          <Ionicons style={styles.heart} name={hearth ? 'heart' : 'heart-outline'} size={30}/>  
        </TouchableRipple>
      </View>
    )
}
const styles = StyleSheet.create({ 
  heart:{
    color: '#c53c3c'
  },
  touchable_container:{
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 40},
    shadowOpacity: 1,
    shadowRadius: 3,
    borderRadius: 40,
    overflow:'hidden' 
  },
  heart_container:{
    padding: 7,
  }
})