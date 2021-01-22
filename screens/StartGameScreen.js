import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');

    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g), '');
    };
    return (
        <View style={styles.screen}>
            <Text>Start a New Game</Text>
            <Card style={style.inputContainer}>
                <Text style={styles.text}>Select a Number</Text>
                <Input style={styles.input}
                 blurOnSubmit
                 autoCapitalize="none"
                 autoCorrect={false}
                 keyboardType="number-pad"
                 maxLength={2}
                 onChangeText={numberInputHandler}
                 value={enteredValue}
                 />
                <View style={styles.buttonContainer}>
                   <View style={styles.button}>
                       <Button title="Reset" onPress={() => {}} color={Colors.accent}></Button>
                   </View>
                   <View style={styles.button}>
                       <Button title="Confirm" onPress={() => {}} color={Colors.primary}></Button>
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
    },
    input: {
        width: 50,
        textAlign: 'center',
    }
});

export default StartGameScreen;