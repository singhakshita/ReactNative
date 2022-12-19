import { useState, useContext } from "react";
import axios from "axios";
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
import Loader from "./Loading";
import { AuthContext } from "../Store/AuthContext";

import CustomButton from "../Components/Button";

function Signupform() {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const [isauthenticating, setAuthState] = useState(false);

  const authContext = useContext(AuthContext);

  async function signupHandler(data) {
    setAuthState(true);
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBLevAZwRwWS1ty2y4oggVcllAy9Bat8a8",
        { email: data.email, password: data.password, returnSecureToken: true }
      )
      .then((res) => authContext.authenticate(res.data.idToken, res.data.email))
      .catch((err) => Alert.alert(err.message));
    setAuthState(false);
  }

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "firstname":
        setEnteredFirstName(enteredValue);
        break;
      case "lastname":
        setEnteredLastName(enteredValue);
        break;
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
      firstname: enteredFirstName,
      lastname: enteredLastName,
      email: enteredEmail,
      password: enteredPassword,
    };
    signupHandler(data);
    setEnteredEmail("");
    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredPassword("");
  }
  if (isauthenticating) return <Loader />;
  return (
    <View>
      <View style={styles.card}>
        <Text>First Name</Text>
        <TextInput
          label="First Name"
          style={styles.inputBox}
          onChangeText={updateInputValueHandler.bind(this, "firstname")}
          value={enteredFirstName}
        ></TextInput>
      </View>
      <View style={styles.card}>
        <Text>Last Name</Text>
        <TextInput
          style={styles.inputBox}
          label="Last Name"
          onChangeText={updateInputValueHandler.bind(this, "lastname")}
          value={enteredLastName}
        ></TextInput>
      </View>
      <View style={styles.card}>
        <Text>Email Address</Text>
        <TextInput
          style={styles.inputBox}
          label="Email Address"
          onChangeText={updateInputValueHandler.bind(this, "email")}
          value={enteredEmail}
          keyboardType="email-address"
        ></TextInput>
      </View>
      <View style={styles.card}>
        <Text>Password</Text>
        <TextInput
          style={styles.inputBox}
          label="Password"
          onChangeText={updateInputValueHandler.bind(this, "password")}
          secure
          value={enteredPassword}
        ></TextInput>
      </View>
      <View style={styles.card}>
        <CustomButton buttonHandler={submitHandler}>Sign up</CustomButton>
      </View>
    </View>
  );
}

export default Signupform;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  titleContainer: {
    justifyContent: "space-around",
    borderBottomWidth: 2,
    borderBottomColor: "black",
    alignItems: "center",
    padding: 10,
  },
  titleImage: {
    height: 300,
    resizeMode: "contain",
    margin: 20,
  },
  titleMainText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputBox: {
    borderWidth: 1,
    padding: 6,
    margin: 2,
    borderRadius: 8,
    borderColor: "#808080",
  },
  card: {
    margin: 12,
  },
});
