import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BotonSaludar from '../components/BotonSaludar';
import Contador from '../components/Contador';

function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hola mundo!</Text>
            <BotonSaludar />
            <Contador />
        </View>
    )
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    text: {
        textAlign: 'center',
    }
})

export default Home;