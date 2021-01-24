import React from 'react';
import { View, StyleSheet, Button, Image, Text } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';


const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image 
                fadeDuration={1000}
                // source={require('../assets/images/success.png')}
                source={{uri: 'https://artofcreativephotography.com/wp-content/uploads/2019/03/David-Koester-Start-In-Die-Landschaftsfotografie-I.jpg'}}
                style={styles.image}
                resizeMode="cover"
                />
            </View>
            <View style={styles.resultContainer} >
                <BodyText>
                    Your phone needed <Text style={styles.highlight} >{props.roundsNumber}</Text> rounds to guess the
                    number <Text style={styles.highlight} >{props.userNumber}</Text>.
                </BodyText>
            </View>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>

    ) 
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        width: 300,
        height: 300,
        overflow: 'hidden',
        marginVertical: 30
    },
    highlight: {
        color: Colors.primary,
    }, 
    resultContainer: {
        marginHorizontal: 20,
    }
});

export default GameOverScreen;