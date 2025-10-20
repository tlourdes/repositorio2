import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

function Profile(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      <Pressable style={styles.button} onPress={() => props.navigation.navigate("Login")}>
        <Text style={styles.buttonText}>Desloguearse</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#FF9500",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 15,
  },
  buttonText: {
  
    fontSize: 16,

  },
});

export default Profile;
