import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#00AD71"
  },
  headerContainer: {
    alignItems: "center",
    width: 315,
  },
  headerlabel:{
    fontSize: 45,
    fontWeight: "bold",
    color: "#ffffff",
    alignItems: "flex-end"
  },
  imagecontainer: {
    alignItems: "center",
    padding:10,
  },
  image: {
    width: 450,
    height: 450,
    resizeMode: "contain",
  },
});

export default styles;