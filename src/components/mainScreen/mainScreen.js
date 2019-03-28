import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, Content, Button } from 'native-base'

const logo = require('../../../assets/logo1.png')

export default class MainScreen extends React.Component {
    logIn() {
        alert('Log in button')
    }

    signUp() {
        alert('Sign up button')
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.imageStyle}
                    source={logo}
                />

                <Button block rounded style={styles.buttonStyle}>
                    <Text>
                        Sign Up
                    </Text> 
                </Button>

                <Button block rounded style={styles.buttonStyle}>
                    <Text>
                        Log In
                    </Text>
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF7F00',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
    },

    imageStyle: {
        marginVertical: 50
    },

    buttonStyle: {
        marginVertical: 10
    },
});
