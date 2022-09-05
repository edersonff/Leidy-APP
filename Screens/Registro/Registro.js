import React from "react";
import { Text, View } from "react-native";
import { packages } from "../../styles/base";
import styles from "./Registro.style";
import Title from "../../Components/Title";
import Inputs from "../../Components/Registro/Inputs/Inputs";
import Label from "../../Components/Label/Label";
import useError from "../../Context/error/UseError";
import { Button } from 'react-native-paper';
export default function AuthPage() {
  const [elemError, setError] = useError();
  return (
    <View style={styles.container}>
      {elemError}
      <View style={styles.logo_container}>
      <Button
        onPress={() => {
          setError("Erro de teste");
        }}>aaaaaaaa</Button>
        <Text style={styles.logo_text}>{packages.name}</Text>
      </View>
      <View style={styles.form_container}>
        <View style={styles.form}>
          <View style={styles.label_container}>
            <Label>Registro</Label>
          </View>
          <Inputs />
        </View>
      </View>
    </View>
  );
}
