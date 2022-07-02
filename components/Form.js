import React, { useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Form = ({ saveReview, setModalVisible }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [rating, setRating] = useState("");
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Review</Text>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        placeholder="Title.."
        onChangeText={(val) => setTitle(val)}
      />
      <Text style={styles.label}>Body</Text>
      <TextInput
        style={styles.input}
        placeholder="Body.."
        onChangeText={(val) => setBody(val)}
      />
      <Text style={styles.label}>Rating:</Text>
      <TextInput
        style={styles.input}
        placeholder="1-5.."
        onChangeText={(val) => setRating(val)}
        keyboardType="numeric"
      />
      <Button
        onPress={() => {
          saveReview({ title: title, body: body, rating: rating });
        }}
        title="Add Review"
      />
      <TouchableOpacity style={{ margin: 20 }}>
        <Button
          onPress={() => {
            setModalVisible(false);
          }}
          title="Close"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  form: {
    backgroundColor: "rgba(170, 126, 184, 0.8)",
    borderRadius: 30,
    width: 300,
    height: 500,
    alignSelf: "center",
  },
  addReview: {
    color: "gray",
    fontSize: 20,
  },
  button: {
    backgroundColor: "white",
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    marginHorizontal: 60,
    borderRadius: 30,
    height: 40,
  },
  input: {
    backgroundColor: "white",
    width: 200,
    height: 40,
    paddingLeft: 10,
    marginVertical: 10,
    alignSelf: "center",
    borderRadius: 10,
  },
  title: {
    marginTop: 20,
    alignSelf: "center",
    marginBottom: 30,
    fontSize: 30,
    color: "white",
  },
  label: {
    color: "white",
    marginLeft: 30,
    marginTop: 20,
  },
});
