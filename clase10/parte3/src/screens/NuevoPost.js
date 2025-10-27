import React, { Component } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { db, auth } from "../firebase/config";

class NuevoPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mensaje: "",
      error: "",
    };
  }

  onSubmit() {
    db.collection("posts")
      .add({
        mensaje: this.state.mensaje,
        email: auth.currentUser.email,
        createdAt: Date.now(),
      })
      .then(() => {
        this.setState({
          mensaje: "",
          error: "",
        });
        console.log("Post agregado a la colección 'posts'");
      })
      .catch((error) => {
        console.log("Error al guardar post:", error);
        this.setState({ error: "Error al guardar el post" });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Nuevo post</Text>

        <TextInput
          style={styles.input}
          placeholder="Escribí tu mensaje..."
          onChangeText={(text) => this.setState({ mensaje: text })}
          value={this.state.mensaje}
        />

        <Pressable style={styles.button} onPress={() => this.onSubmit()}>
          <Text style={styles.buttonText}>Publicar</Text>
        </Pressable>
      </View>
    );
  }
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
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    minHeight: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginTop: 15,
  },
  success: {
    color: "green",
    marginTop: 15,
  },
});

export default NuevoPost;
