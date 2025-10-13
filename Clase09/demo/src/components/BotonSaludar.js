import React, { Component } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

class BotonSaludar extends Component{

    saludar(){
        console.log("Me clickearon");
    }
    render(){
        return(
            <Pressable onPress={() => this.saludar()} style={styles.boton}>
                <Text style={styles.text}>Clickeame</Text>
            </Pressable>
        )
    }
}

const styles = StyleSheet.create({
    boton: {
        padding: 4,
        backgroundColor: '#ccc',
        borderRadius: 4,
        marginBottom: 10,
       
        
    },
    text: {
        color: 'black',
        fontWeight: "bold",
         textAlign: 'center'

    }
})
export default BotonSaludar;