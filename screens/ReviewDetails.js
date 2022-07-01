import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

const ReviewDetails = ({ route, navigation }) => {
  const item = route.params;
  return (
    <View style={globalStyles.container}>
      <Text>{item.title}</Text>
      <Text>{item.body}</Text>
      <Text>{item.rating}</Text>
    </View>
  );
};

export default ReviewDetails;
