import React from 'react';
import { AppRegistry, Text, View, Button, StyleSheet, Image } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import styles from './Pages/Styles';
import Home from './Pages/Home';
import About from './Pages/About';
import Settings from './Pages/Settings';
import Logout from './Pages/Logout';
import CreateAccount from './Pages/CreateAccount';
import UserHome from './Pages/UserHome';


const HomeNavigator = StackNavigator({
    Home: { screen: Home },
    CreateAccount: { screen: CreateAccount },
    UserHome: { screen: UserHome }
}, {
    initalRouteName: 'Home',
});

const MainApp = TabNavigator({
    // Swap these back when settings page is done
    Settings: { screen: Settings },
    Home: { screen: HomeNavigator },
    About: { screen: About },
    Logout: { screen: Logout }
}, {
    tabBarOptions: {
        activeTintColor: 'black',
    },
    navigationOptions: {
        title: 'Home'
    }
});



AppRegistry.registerComponent('NavPractice', () => MainApp);
