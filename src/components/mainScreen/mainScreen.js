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
                    <Text style={styles.textStyle}>
                        Sign Up
                    </Text> 
                </Button>

                <Button block rounded style={styles.buttonStyle}>
                    <Text style={styles.textStyle}>
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
        backgroundColor: "#4286f4",
        marginVertical: 10,
        marginHorizontal: 10
    },

    textStyle: {
        // color: "#FF7F00",
        fontSize: 22
    }
});
