import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
} from "react-native";
import { useState, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../Store/AuthContext";

import Header from "../Components/Header";
import Cards from "../Components/Cards";
import Footer from "../Components/Footer";

const data = [
  {
    icon: require("../assets/selfPaced.png"),
    title: "Self Paced Course",
    subtitle: "Learn and Upskill via online Courses",
  },
  {
    icon: require("../assets/liveclass.png"),
    title: "Live Classes",
    subtitle: "Live classes offering Guaranteed Job Placement support",
  },
  {
    icon: require("../assets/computer.png"),
    title: "Interactive Practice  Platforms",
    subtitle: "Learn through Hands-on coding Experiences",
  },
  {
    icon: require("../assets/corporate.png"),
    title: "For Corporates",
    subtitle: "Meet your hiring needs at ease",
  },
];

function MainPage() {
  return (
    <ScrollView style={styles.mainContainer}>
      <Header />
      <Image
        style={styles.titleImage}
        source={require("../assets/Guvi_image.jpg")}
      />
      <Cards array={data} />
      <Footer />
    </ScrollView>
  );
}
export default MainPage;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  menuBar: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginLeft: 10,
    alignItems: "center",
  },

  titleImage: {
    resizeMode: "cover",
    height: 300,
    width: "100%",
  },
  cardContainer: {
    padding: 10,
    justifyContent: "space-around",
  },
  cards: {
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
  },
  card: {
    backgroundColor: "#755E93",
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: "100%",
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: "#5A5A5A",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
