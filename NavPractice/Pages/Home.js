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
            email: '',
            password: '',
        };
    }

    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../Resources/home.png')} style={styles.icon} />),
    };

    email(event) {
        this.setState({
            email: event.nativeEvent.text
        });
    }
    password(event) {
        this.setState({
            password: event.nativeEvent.text
        });
    }

    signIn() {
        let email = this.state.email;
        let password = this.state.password;
        console.log('Email:', email, 'Password:', password);
        this.props.navigation.navigate('UserHome')
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../Resources/home.png')} style={styles.icon} />
                <Text style={styles.container}>Welcome!</Text>
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
                <TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText} onPress={this.signIn.bind(this)}>Sign In</Text>
                </TouchableHighlight>
                <View style={styles.separator}></View>
                <Text style={styles.account}>New to MoneyMapper? Great!</Text>
                <TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('CreateAccount')}>Create Account</Text>
                </TouchableHighlight>
          </View>
        );
    }
}
