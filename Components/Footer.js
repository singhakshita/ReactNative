import { View, Text, StyleSheet } from "react-native";
function Footer() {
  return (
    <View style={styles.footer_container}>
      <Text style={styles.footer_text}>Akshita Singh</Text>
      <Text style={styles.footer_text}>9205360027</Text>
      <Text style={styles.footer_text}>singhakshita@gmail.com</Text>
    </View>
  );
}
export default Footer;
const styles = StyleSheet.create({
  footer_container: {
    marginTop: 40,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  footer_text: {
    color: "#ffffff",
    fontSize: 8,
  },
});
