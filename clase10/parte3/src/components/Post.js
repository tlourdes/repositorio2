import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Post(props) {
  const mensaje = props.data.mensaje;
  const email = props.data.email;

  return (
    <View style={styles.card}>
      <Text style={styles.mensaje}>{mensaje}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  mensaje: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
  },
  email: {
    fontSize: 14,
    color: "#555",
  },
});

export default Post;
