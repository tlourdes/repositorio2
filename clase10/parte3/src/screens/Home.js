import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { db } from "../firebase/config";
import Post from "../components/Post";
import DynamicForm from "../components/DynamicForm"; 

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
    };
  }

  componentDidMount() {
   
    db.collection("posts").onSnapshot((docs) => {
      let posts = [];
      docs.forEach((doc) => {
        posts.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      this.setState({
        posts: posts,
        loading: false,
      });
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Cargando posteos...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Posteos recientes</Text>

        {this.state.posts.length === 0 ? (
          <Text style={styles.noPosts}>No hay posteos</Text>
        ) : (
          <FlatList
            data={this.state.posts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Post data={item.data} />}
          />
        )}

       
        <DynamicForm />
      </View>
    );
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
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
});

export default Home;

