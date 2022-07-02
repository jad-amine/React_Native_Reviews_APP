import React, { useState } from "react";

import {
  Modal,
  FlatList,
  Text,
  Pressable,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import Form from "../components/Form";
import { globalStyles } from "../styles/global";

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "Lorem Ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All ",
      rating: 4,
      body: "Lorem Ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "Lorem Ipsum",
      key: "3",
    },
  ]);

  const saveReview = (review) => {
    review.key = Math.random() * 100;
    setReviews([...reviews, review]);
    setModalVisible(false);
  };
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.title}
            onPress={() => navigation.navigate("Review", item)}
          >
            <Text style={globalStyles.textTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Form saveReview={saveReview} setModalVisible={setModalVisible} />
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Add Review</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  title: {
    backgroundColor: "#add",
    padding: 10,
    margin: 6,
    borderRadius: 5,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
});
