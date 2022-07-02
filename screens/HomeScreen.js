import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Reviews from "./Reviews";

const stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <stack.Navigator initialRouteName="Home">
      <stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <stack.Screen name="Reviews" component={Reviews} />
    </stack.Navigator>
  );
};

export default HomeScreen;
