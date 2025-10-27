import React, { Component } from "react";
import { db, auth } from "../firebase/config";
import { FlatList, StyleSheet, Text, View } from "react-native";

class Usuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],
      loading: true
    };
  }

  componentDidMount() {
    db.collection("users").onSnapshot((docs) => {
      let usuarios = [];
      docs.forEach((doc) => {
        usuarios.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      this.setState({ 
        usuarios: usuarios,
        loading: false

      });
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
             <Text style={styles.title}>Lista de usuarios registrados</Text>
          <Text style>Cargando...</Text>
        </View>
      );
    }
    return(<View style={styles.container}>
        <Text style={styles.title}>Lista de usuarios registrados</Text>

        <FlatList
          data={this.state.usuarios}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.email}>{item.data.email}</Text>
            </View>
          )}
          
        />
      </View>)
     
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  email: {
    fontSize: 16,
    color: "#333",
  },
});
export default Usuarios;
