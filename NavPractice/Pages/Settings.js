import React from 'react';
import { AppRegistry, Text, View, Button, StyleSheet, Image, ListView } from 'react-native';
import { TabNavigator } from 'react-navigation';
import styles from './Styles';

export default class Settings extends React.Component {
    constructor() {
    let mainCategories = ['Food', 'Utilities', 'Housing', 'Giving', 'Transportation', 'Insurance and Taxes', 'Loans', 'Miscelanneous'];
    let foodCategories =

    super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            mainCategories: ds.cloneWithRows(mainCategories),
            subCategories: ds.cloneWithRows(['SubCat1', 'SubCat2', 'SubCat3'])
        };
    }

    static navigationOptions = {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../Resources/settings.png')} style={styles.icon} />),
    };

    render() {
        let listInfo =                 <ListView
                           dataSource={this.state.mainCategories}
                           renderRow={(rowData) =>
                               <View>
                               <Text>{rowData}</Text>
                               <ListView
                                    dataSource={this.state.subCategories}
                                    renderRow={(rowData) =>
                                    <Text>{rowData}</Text>}
                                /></View>}

                        />;
        return (
            <View style={styles.container}>
                <Image source={require('../Resources/settings.png')} style={styles.icon} />
                <Text style={styles.container}>Settings / Configuration Page</Text>
                {listInfo}
                <Button
                    onPress={() => this.props.navigation.navigate('UserHome')}
                    title="Go to User Home" />
            </View>
        );
    }
}
