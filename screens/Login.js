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
import { useState, useContext } from "react";
import axios from "axios";
import Loader from "./Loading";
import { AuthContext } from "../Store/AuthContext";

import CustomButton from "../Components/Button";

function Login() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isauthenticating, setAuthState] = useState(false);

  const authContext = useContext(AuthContext);

  async function loginHandler(data) {
    setAuthState(true);
    try {
      const res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBLevAZwRwWS1ty2y4oggVcllAy9Bat8a8",
        {
          email: data.email,
          password: data.password,
          returnSecureToken: true,
        }
      );
      authContext.authenticate(res.data.idToken, res.data.email);
    } catch (error) {
      Alert.alert("Wrong email or password");
    }
    setAuthState(false);
  }

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
    }
  }
  function submitHandler() {
    const emailIsValid = enteredEmail.trim().includes("@");
    const passwordIsValid = enteredPassword.trim().length > 6;
    if (!emailIsValid || !passwordIsValid) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      return;
    }

    const data = {
      email: enteredEmail,
      password: enteredPassword,
    };
    loginHandler(data);
    setEnteredEmail("");
    setEnteredPassword("");
  }
  if (isauthenticating) return <Loader />;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title_text}> GUVI</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.subtitle_text}>Welcome Back...!</Text>
      </View>
      <View>
        <Image style={styles.image} source={require("../assets/login.jpeg")} />
      </View>
      <View>
        <View style={styles.card}>
          <Text>Email Address</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Email Address"
            onChangeText={updateInputValueHandler.bind(this, "email")}
            value={enteredEmail}
            keyboardType="email-address"
          ></TextInput>
        </View>
        <View style={styles.card}>
          <Text>Password</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Password"
            onChangeText={updateInputValueHandler.bind(this, "password")}
            secure
            value={enteredPassword}
          ></TextInput>
        </View>
        <View style={styles.card}>
          <CustomButton buttonHandler={submitHandler}>Login</CustomButton>
        </View>
      </View>
    </ScrollView>
  );
}

export default Login;

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
