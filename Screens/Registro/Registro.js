import React from "react";
import { Text, View } from "react-native";
import { packages } from "../../styles/base";
import styles from "./Registro.style";
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
            <Title center mBottom={15}>Registrar</Title>
          </View>
          <Inputs />
        </View>
      </View>
    </View>
  );
}
