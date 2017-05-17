import React from 'react';
import { AppRegistry, Text, View, Button, StyleSheet, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import styles from './Styles';

export default class Settings extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../Resources/settings.png')} style={styles.icon} />),
    };

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../Resources/settings.png')} style={styles.icon} />
                <Text style={styles.container}>Settings / Configuration Page</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('UserHome')}
                    title="Go to User Home" />
            </View>
        );
    }
}
