import { View, Pressable, Text, StyleSheet } from "react-native";

function CustomButton(props) {
  return (
    <Pressable onPress={props.buttonHandler}>
      <View style={styles.button}>
        <Text style={styles.button__text}>{props.children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    margin: 4,
    backgroundColor: "#52BE80",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  button__text: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CustomButton;
