import { useState } from "react";

import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import Signupform from "./SingupForm";

function Signup() {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title_text}> GUVI</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.subtitle_text}>Welcome Back...!</Text>
      </View>
      <View>
        <Image style={styles.image} source={require("../assets/login.jpeg")} />
      </View>
      <Signupform></Signupform>
    </ScrollView>
  );
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    margin: 12,
    alignItems: "center",
  },
  title_text: {
    color: "#52BE80",
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle_text: {
    color: "#2ea490",
    fontSize: 16,
    fontWeight: "bold",
  },
  inputBox: {
    borderWidth: 1,
    padding: 6,
    paddingLeft: 8,
    margin: 2,
    borderRadius: 8,
    borderColor: "#808080",
  },
  card: {
    margin: 20,
  },
  image: {
    resizeMode: "cover",
    height: 300,
    width: "100%",
  },
});
