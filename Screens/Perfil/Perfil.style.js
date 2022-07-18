import { StyleSheet, StatusBar } from "react-native";
export default StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    padding: 20,
    flex: 1,
    height: "100%",
    backgroundColor: "#fff",
  },
  perfil_foto: {
    width: "100%",
    flex: 1,
    backgroundColor: "gray",
    justifyContent: 'center',
    alignItems: 'center',
  },
  perfil_desc: {
    width: "100%",
    flex: 2,
    backgroundColor: "red",
  },
  foto: { 
    resizeMode: "contain",
    height: 180,
    width: 180,
    borderRadius: 90,
  },
}
);
