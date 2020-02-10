import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const ComponentScreen = () => {
    const name = 'Shayan'
    return (
        <View>
            <Text style={styles.subHeaderStyle}>Getting started with React Native!</Text>
            <Text style={styles.textStyle}>My name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subHeaderStyle: {
        fontSize: 40
    },
    textStyle: {
        fontSize: 20
    }
})

export default ComponentScreen