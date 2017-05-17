import React from 'react';
import { AppRegistry, Text, View, Button, StyleSheet, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import styles from './Styles';

export default class About extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'About',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../Resources/about.png')} style={styles.icon} />),
    };

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../Resources/about.png')} style={styles.icon} />
                <Text style={styles.container}>About page</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back home" />
            </View>
        );
    }
}
