import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import Card from '../components/Card'

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Start a New Game</Text>
            <Card style={style.inputContainer}>
                <Text style={styles.text}>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                   <View style={styles.button}>
                       <Button title="Reset" onPress={() => {}} color='#c717fc'></Button>
                   </View>
                   <View style={styles.button}>
                       <Button title="Confirm" onPress={() => {}} color='#f7287b'></Button>
                   </View>
                </View>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    text: {
        alignItems: 'center'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button: {
        width: 100,
    }
});

export default StartGameScreen;