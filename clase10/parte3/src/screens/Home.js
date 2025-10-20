import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import DynamicForm from "../components/DynamicForm";

function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home </Text>
       <DynamicForm />
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
  },
});

export default Home;
