import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Review from "./Review";

const stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <stack.Navigator initialRouteName="Home">
      <stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <stack.Screen name="Review" component={Review} />
    </stack.Navigator>
  );
};

export default HomeScreen;
