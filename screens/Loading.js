import { StyleSheet, Text, View } from "react-native";

function Loader() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Loading.....</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2ea490",
  },
});
export default Loader;
