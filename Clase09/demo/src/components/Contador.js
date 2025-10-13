import React, {Component} from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

class Contador extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0
        }
    }

     click(){
            this.setState({contador: this.state.contador + 1})
        }
        render(){
            return(
                <View style={styles.container}>
                    <Text style={styles.text2}>Cantidad de clicks: {this.state.contador}</Text>
                    <Pressable onPress={() => this.click()} style={styles.boton}>
                        <Text style={styles.text1}>Click aquí para contar</Text>
                    </Pressable>
                </View>
            )
        }
}

const styles = StyleSheet.create({
    boton: {
        padding: 7,
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        borderRadius: 4,
        marginBottom: 10,
    },
    text1: {
        color: 'black',
        fontWeight: "bold",
        textAlign: 'center'

    },
    text2:{textAlign: 'center'},
     
    container: {
        marginVertical: 5,
        
    }
})

export default Contador;