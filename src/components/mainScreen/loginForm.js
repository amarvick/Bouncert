import React from 'react';
import { Form, Image, Item, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, Content, Button } from 'native-base'


export default class MainScreen extends React.Component {

    render() {
        return (
            <Form>
                <Item>
                    <Input placeholder="Username" />
                </Item>
                <Item last>
                    <Input placeholder="Password" />
                </Item>
            </Form>
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
