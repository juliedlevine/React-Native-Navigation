import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, Image, TouchableHighlight, TextInput } from 'react-native';

console.disableYellowBox = true;

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: '',
            last: '',
            email: '',
            password: '',
            confirm: '',
        };
    }

    first(event) {
        this.setState({ first: event.nativeEvent.text });
    }
    last(event) {
        this.setState({ last: event.nativeEvent.text });
    }
    email(event) {
        this.setState({ email: event.nativeEvent.text });
    }
    password(event) {
        this.setState({ password: event.nativeEvent.text });
    }
    confirm(event) {
        this.setState({ confirm: event.nativeEvent.text });
    }

    signIn() {
        let email = this.state.email;
        let password = this.state.password;
        console.log('Email:', email, 'Password:', password);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./Resources/home.png')} style={styles.icon} />
                <Text style={styles.container}>Welcome! Please Fill out all fields.</Text>
                <TextInput
                    style={styles.searchInput}
                    placeholder='First Name'
                    onChange={this.first.bind(this)}
                    value={this.state.first} />
                <TextInput
                    style={styles.searchInput}
                    placeholder='Last Name'
                    onChange={this.last.bind(this)}
                    value={this.state.last} />
                <TextInput
                    style={styles.searchInput}
                    placeholder='Email'
                    onChange={this.email.bind(this)}
                    value={this.state.email} />
                <TextInput
                    style={styles.searchInput}
                    placeholder='Password'
                    onChange={this.password.bind(this)}
                    secureTextEntry={true}
                    value={this.state.password} />
                <TextInput
                    style={styles.searchInput}
                    placeholder='Confirm password'
                    onChange={this.confirm.bind(this)}
                    secureTextEntry={true}
                    value={this.state.confirm} />
                <TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText} onPress={() => console.log("you clicked this thing!")}>Sign Up</Text>
                </TouchableHighlight>

          </View>
        );
    }
}

const styles = {
    container: {
        padding: 30,
        marginTop: 30,
        alignItems: 'center'
    },
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565'
    },
    icon: {
        width: 20,
        height: 20,
    },
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    searchInput: {
        height: 36,
        padding: 4,
        marginBottom: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: 'black'
    },
    separator: {
        height: 40,
    },
    account: {
        marginTop: 50,
        marginBottom: 10,
    }
};

export default Signup;
