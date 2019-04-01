import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, Content, Button } from 'native-base';

const logo = require('../../../assets/logo1.png');

import LoginForm from './loginForm';
import SignUpForm from './signUpForm';

export default class MainScreen extends React.Component {
    constructor() {
        super();

        this.state = {
            componentToDisplay: ''
        };

        this.backToHomeScreen = this.backToHomeScreen.bind(this)
    }

    logIn() {
        this.setState({ componentToDisplay: 'Login' });
    }

    signUp() {
        this.setState({ componentToDisplay: 'SignUp' });
    }

    backToHomeScreen() {
        this.setState({ componentToDisplay: '' })
    }

    render() {
        var componentToDisplay = this.state.componentToDisplay

        if (componentToDisplay === 'Login') {
            return ( 
                <LoginForm 
                    backToHomeScreen={this.backToHomeScreen}
                />
            );
        } else if (componentToDisplay === 'SignUp') {
            return ( 
                <SignUpForm 
                    backToHomeScreen={this.backToHomeScreen}
                /> 
            );
        } else {
            return (
                <View style={styles.container}>
                    <Image
                        style={styles.imageStyle}
                        source={logo}
                    />

                    <Button 
                        block rounded 
                        style={styles.buttonStyle}
                        onPress={() => this.signUp()}
                    >
                        <Text style={styles.textStyle}>
                            Sign Up
                        </Text> 
                    </Button>

                    <Button 
                        block rounded 
                        style={styles.buttonStyle}
                        onPress={() => this.logIn()}
                    >
                        <Text style={styles.textStyle}>
                            Log In
                        </Text>
                    </Button>
                </View>
            );
        }
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
        fontSize: 22
    }
});
