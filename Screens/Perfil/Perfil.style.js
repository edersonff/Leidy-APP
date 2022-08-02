import { StyleSheet, StatusBar } from "react-native";
export default StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    padding: 20,
    height: "100%",
    width: '100%'
  },
  perfil_foto: {
    width: "100%",
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  perfil_desc: {
    width: "100%",
    backgroundColor: '#fff',
  },
  foto: { 
    resizeMode: "contain",
    height: 150,
    width: 150,
    borderRadius: 90,
  },
}
);
