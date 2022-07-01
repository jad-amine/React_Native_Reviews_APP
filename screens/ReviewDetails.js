import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

const ReviewDetails = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text>ReviewDetails Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Reviews")}
      />
      <Button title="Go Home !" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default ReviewDetails;
