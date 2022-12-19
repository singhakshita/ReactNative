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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainPage from "./screens/MainPage";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import Signup from "./screens/Signup";
import AuthContextProvider, { AuthContext } from "./Store/AuthContext";

const Stack = createNativeStackNavigator();
export default function App() {
  function AuthStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="MainPage" component={MainPage}></Stack.Screen>
        <Stack.Screen name="login" component={Login}></Stack.Screen>
        <Stack.Screen name="signup" component={Signup}></Stack.Screen>
      </Stack.Navigator>
    );
  }
  function MainStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="MainPage" component={MainPage}></Stack.Screen>
        <Stack.Screen name="profile" component={Profile}></Stack.Screen>
      </Stack.Navigator>
    );
  }
  function Navigation() {
    const authContext = useContext(AuthContext);
    return (
      <NavigationContainer>
        {authContext.isAuthenticated ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    );
  }
  return (
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  );
}
