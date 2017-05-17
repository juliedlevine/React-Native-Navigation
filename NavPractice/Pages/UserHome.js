import React from 'react';
import { AppRegistry, Text, View, Button, StyleSheet, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import styles from './Styles';

export default class Test extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../Resources/home.png')} style={styles.icon} />),
    };
    
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../Resources/settings.png')} style={styles.icon} />
                <Text style={styles.container}>User Home</Text>
            </View>
        );
    }
}
