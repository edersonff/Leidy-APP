import React, { useEffect } from 'react';
import useState from 'react-usestateref'
import { Text, View, Pressable, Animated } from 'react-native';
import { packages } from '../../styles/base';
import Btn from '../../Components/Button';
import Input from '../../Components/Input';
import styles from './AuthPage.style';
import { passwordStrength } from 'check-password-strength';
import Animation from '../../Helpers/Animation'

const width = [];
export default function Loading(props) {
    const { innerHeight } = window;
    const [ passSecurity, setPassSecurity, passSecurityRef ] = useState(0);
    const [ bottomAnim, setBottomAnim ] = useState(false);
    const bottom = Animation(-innerHeight*0.7, 0, 250);
    bottom.setValue(0);
    useEffect(()=>{
        bottom.setValue(bottomAnim ? 0 : -innerHeight*0.7);
    },[bottomAnim])

    function PassReturn({id}){
        width[id-1] = width[id-1] ? width[id-1] : Animation(0, 65, 250);

        useEffect(()=>{
            console.log(250*(passSecurity-passSecurityRef.current-id));
            setTimeout(()=>{
                width[id-1].setValue(passSecurity >= id ? 65 : 0);
            }, 250*(passSecurity-passSecurityRef.current-id))
        },[passSecurity])

        return(
            <View style={[styles.verify_pass, styles.pass_empty]}>
                <Animated.View 
                    style={[
                        styles.verify_pass, styles.pass_fill, 
                        { width: width[id-1].anim }
                    ]} 
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={()=>{if(bottomAnim)setBottomAnim(false)}} style={styles.logo_container}>
                <Text style={styles.logo_text}>{packages.name}</Text>
            </Pressable>
            <View style={styles.btns_container}>
                <Btn text="Sou ... " onPress={()=>{if(!bottomAnim)setBottomAnim(true)}}/>
                <Btn text={"Sou ... "} onPress={()=>{if(!bottomAnim)setBottomAnim(true)}}/>
            </View>
            <Animated.View style={[styles.form, {bottom: bottom.anim}]}>
                <View style={styles.form_control}>
                    <Input secure={false} placeholder='Digite seu email' name={'Email'} />
                    <Input secure={true} placeholder='Digite sua senha' name={'Senha'} onChange={(e)=>{setPassSecurity(passwordStrength(e.target.value).id)}} />
                    <Btn onPress={()=>{ props.navigation.navigate('SystemMessage') }} text='Fazer cadastro' color='#9949CA' fill={true}/> 
                    <View>
                        <Text style={styles.title_verify_pass}>Segurança da senha</Text>
                        <View style={styles.container_verify_pass}>
                            <PassReturn id={1} />
                            <PassReturn id={2} />
                            <PassReturn id={3} />
                        </View>
                    </View>
                </View>
            </Animated.View>
        </View>
    );
}
