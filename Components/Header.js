import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, StyleSheet } from "react-native";
import CustomButton from "./Button";
import { AuthContext } from "../Store/AuthContext";

function Header() {
  const authContext = useContext(AuthContext);
  const navigation = useNavigation();
  function onPressLogin() {
    navigation.navigate("login");
  }
  function onPressSignup() {
    navigation.navigate("signup");
  }
  function onPressProfile() {
    navigation.navigate("profile");
  }
  return (
    <View style={styles.header}>
      <View style={styles.header__logo}>
        <Text style={styles.header__logo__text}>GUVI</Text>
      </View>
      <View style={styles.header_options}>
        {!authContext.isAuthenticated && (
          <CustomButton buttonHandler={onPressLogin}> Login</CustomButton>
        )}
        {!authContext.isAuthenticated && (
          <CustomButton buttonHandler={onPressSignup}>Sign up</CustomButton>
        )}
        {authContext.isAuthenticated && (
          <CustomButton buttonHandler={onPressProfile}>Profile</CustomButton>
        )}
      </View>
    </View>
  );
}
export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
    padding: 8,
  },
  header__logo__text: {
    fontWeight: "bold",
    color: "#52BE80",
    fontSize: 20,
  },
  header_options: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
