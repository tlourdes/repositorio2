import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Card(props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{props.data.title}</Text>
      <Text style={styles.price}>${props.data.price}</Text>
      <Text style={styles.description}>{props.data.description}</Text>
      <Text style={styles.category}>{props.data.category}</Text>
      <Image
        source={{ uri: props.data.image }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 15,
   
    elevation: 3,
    alignItems: "center",
  },
  image: {
    height: 180,
    width: "100%",
    marginTop: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  price: {
    color: "green",
    fontWeight: "bold",
    marginVertical: 4,
  },
  description: {
    fontSize: 12,
    textAlign: "center",
    color: "#555",
  },
  category: {
    fontSize: 13,
    color: "gray",
    marginTop: 5,
  },
});

export default Card;
