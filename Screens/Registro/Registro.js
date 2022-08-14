import React, { useEffect, useRef } from "react";
import { Text, View, Pressable, Animated } from "react-native";
import { packages } from "../../styles/base";
import Btn from "../../Components/Button";
import styles from "./Registro.style";
import { passwordStrength } from "check-password-strength";
import Animation from "../../Helpers/Animation";
import { store } from "../../App";
import Context, { api } from "../../Context";
import { TextInput } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import Title from "../../Components/Title";
import Inputs from "../../Components/Registro/Inputs/Inputs";

const width = [];
export default function AuthPage() {
  return (
    <View style={styles.container}>
      <View style={styles.logo_container}
        onPress={() => {
          if (bottomAnimRegister) setbottomAnimRegister(false);
        }}>
        <Text style={styles.logo_text}>{packages.name}</Text>
      </View>
      <View style={styles.form_container}>
        <View style={styles.form}>
          <View style={styles.label_container}>
            <Title mBottom={5}>Titulo</Title>
          </View>
          <Inputs />
        </View>
      </View>
    </View>
  );
}
