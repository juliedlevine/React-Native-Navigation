import React from 'react';
import { AppRegistry, Text, View, Button, Image, TouchableHighlight, TextInput } from 'react-native';
import { TabNavigator } from 'react-navigation';
import styles from './Styles';
import Settings from './Settings';
console.disableYellowBox = true;

export default class Home extends React.Component {
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
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../Resources/home.png')} style={styles.icon} />),
    };

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
                <Image source={require('../Resources/home.png')} style={styles.icon} />
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
                    <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Settings')}>Sign Up</Text>
                </TouchableHighlight>

          </View>
        );
    }
}
