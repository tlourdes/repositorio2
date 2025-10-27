import React, { Component } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import {auth} from "../firebase/config";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loggedIn: false,
      error1: "",
      error2: "",
      error3: "",
    };
  }

  onSubmit(email,pass) {
    console.log("Datos ingresados:");
    console.log("Email:", this.state.email);
    console.log("Password:", this.state.password);
    auth.signInWithEmailAndPassword(email, pass)
    .then(response=>{

     
      this.setState({loggedIn: true, error1: "",
        error2: "",
        error3: ""}
      );
      console.log("Login exitoso:", response);
      this.props.navigation.navigate("HomeMenu");
    })

    .catch(error=>{
       if (!email.includes("@")){this.setState({error1: "Email mal formateado"})}else{this.setState({error1: ""})}
      if (pass.length < 6){this.setState({error2: "La password debe tener una longitud mínima de 6 caracteres"})}else{this.setState({error2: ""})}

      console.log("Error en el login:", error);
      this.setState({error3: "Credenciales incorrectas"});
    });

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(text) => this.setState({ email: text })}
          value={this.state.email}

        />

               <Text >{this.state.error1}</Text>
             

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({ password: text })}
          value={this.state.password}
        />
  <Text >{this.state.error2}</Text>
   
        <Pressable style={styles.button} onPress={() => this.onSubmit(this.state.email, this.state.password)} >
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>

        {this.state.error1 === "" && this.state.error2 === "" ? (
          <Text>{this.state.error3}</Text>
        ) : null}

        <Pressable
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Register")}
        >
          <Text style={styles.buttonText}>No tengo cuenta</Text>
        </Pressable>

        <Pressable
          style={[styles.button, styles.orangeButton]}
          onPress={() => this.props.navigation.navigate("HomeMenu")}
        >
          <Text style={styles.buttonText}>Home</Text>
        </Pressable>

        <View style={styles.dataPreview}>
          <Text style={styles.previewTitle}>Vista previa de datos:</Text>
          <Text>Email: {this.state.email}</Text>
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
    backgroundColor: "#2e92fdff",  
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 10,
  },
  orangeButton: {
    backgroundColor: "#FF9500", 
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

export default Login;


