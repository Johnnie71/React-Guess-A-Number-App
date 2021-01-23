import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';


const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randNum = Math.floor(Math.random() * (max - min)) + min;
    if(randNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randNum;
    };
};

const GameScreen = props => {

    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, props.userChoice)
    );

    return (
        <View>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <Button title="LOWER" onPress={() => {}}/>
                <Button title="GREATER" onPress={() => {}}/>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default GameScreen;