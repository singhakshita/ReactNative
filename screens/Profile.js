import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
} from "react-native";
import { useContext } from "react";

import { AuthContext } from "../Store/AuthContext";
import Cards from "../Components/Cards";
import CustomButton from "../Components/Button";

import { courses } from "../Modal/Data";

function Profile() {
  const authContext = useContext(AuthContext);
  const username = authContext.emailId.split("@", 1);

  function logoutButtonHandler() {
    authContext.logout();
  }

  return (
    <View>
      <View style={styles.profile_header}>
        <View>
          <Image
            style={styles.profile_img}
            source={require("../assets/hacker.png")}
          />
        </View>
        <View>
          <Text style={styles.text}>{`Hello ${username}`}</Text>
          <Text style={styles.subtext}>profile views : 13</Text>
        </View>
      </View>
      <ScrollView style={styles.cards_container}>
        <View style={styles.title__header}>
          <Text>MY COURSES </Text>
        </View>
        <Cards array={courses} />
        <View style={styles.title__header}>
          <Text> Skills</Text>
        </View>
        <View style={styles.title__header}>
          <Text> Add your Resume</Text>
        </View>
      </ScrollView>
      <CustomButton buttonHandler={logoutButtonHandler}>Log out</CustomButton>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  profile_header: {
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#52BE80",
    borderRadius: 8,
    marginBottom: 8,
  },
  profile_img: {
    resizeMode: "cover",
    height: 150,
    width: 160,
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  subtext: {
    color: "#ffffff",
    fontSize: 16,
  },
  title__header: {
    margin: 8,
    padding: 10,
    paddingLeft: 20,
    backgroundColor: "#AFE1AF",
  },
});
