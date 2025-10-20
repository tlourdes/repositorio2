import React, { Component } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

class DynamicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comentario: "",
    };
  }

  onSubmit() {
    console.log("Comentario ingresado:");
    console.log(this.state.comentario);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Dejá tu comentario</Text>


        <TextInput
          style={styles.input}
          placeholder="Escribí tu comentario..."
          multiline={true}
          onChangeText={(text) => this.setState({ comentario: text })}
          value={this.state.comentario}
        />


        <Pressable style={styles.button} onPress={() => this.onSubmit()}>
          <Text style={styles.buttonText}>Enviar</Text>
        </Pressable>


        <View style={styles.dataPreview}>
          <Text style={styles.previewTitle}>Vista previa:</Text>
          <Text>{this.state.comentario}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
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
    minHeight: 80,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#2e92fd",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  dataPreview: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    width: "100%",
  },
  previewTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default DynamicForm;
