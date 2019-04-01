import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Container, Content, Form, Input, Item } from 'native-base'


export default class SignUpForm extends React.Component {
    constructor() {
        super();
    
        this.state = {
            username: '',
            password: '',
        };
    
    }

    render() {
        return (
            <View style={styles.container}>
                <Form style={styles.form}>
                    <Item>
                        <Input 
                            placeholder="Username" 
                            // value={this.state.username}
                            // onChange={}
                        />
                    </Item>
                    <Item last>
                        <Input 
                            placeholder="Password" 
                            // value={this.state.password}
                            // onChange={}
                        />
                    </Item>
                </Form>

                <Button 
                    block rounded 
                    style={styles.buttonStyle}
                    onPress={this.props.backToHomeScreen}
                >
                    <Text style={styles.textStyle}>
                        Sign Up
                    </Text> 
                </Button>

                <Button 
                    block rounded 
                    style={styles.buttonStyle}
                    onPress={this.props.backToHomeScreen}
                >
                    <Text style={styles.textStyle}>
                        Go Back
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

    form: {
        backgroundColor: "white",
        alignSelf: 'stretch'
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
