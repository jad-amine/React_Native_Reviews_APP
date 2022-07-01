import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Home = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textTitle}>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Reviews")}
      />
    </View>
  );
};

export default Home;
