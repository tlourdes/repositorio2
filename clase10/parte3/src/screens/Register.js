import React, { Component } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
    };
  }

  onSubmit() {
    console.log("Datos del usuario:");
    console.log("Email:", this.state.email);
    console.log("Username:", this.state.username);
    console.log("Password:", this.state.password);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Crear cuenta</Text>


        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(text) => this.setState({ email: text })}
          value={this.state.email}
        />


        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          onChangeText={(text) => this.setState({ username: text })}
          value={this.state.username}
        />


        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({ password: text })}
          value={this.state.password}
        />


        <Pressable style={styles.button} onPress={() => this.onSubmit()}>
          <Text style={styles.buttonText}>Registrate</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => this.props.navigation.navigate("Login")} >
          <Text style={styles.buttonText}>Ya tengo cuenta</Text>
        </Pressable>


        <View style={styles.dataPreview}>
          <Text style={styles.previewTitle}>Vista previa de datos:</Text>
          <Text>Email: {this.state.email}</Text>
          <Text>Username: {this.state.username}</Text>
          <Text>Password: {this.state.password}</Text>
        </View>
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
    marginBottom: 30,
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
  },
  button: {
    backgroundColor: "#2e92fd",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  dataPreview: {
    marginTop: 40,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    width: "100%",
  },
  previewTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Register;


