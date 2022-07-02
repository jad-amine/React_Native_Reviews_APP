import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/global";

const Reviews = ({ route }) => {
  const item = route.params;
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textTitle}>{item.title}</Text>
      <Text style={globalStyles.paragraph}>{item.body}</Text>
      <Text>{item.rating}</Text>
    </View>
  );
};

export default Reviews;
