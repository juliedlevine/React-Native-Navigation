import React from 'react';
import { connect } from 'react-redux';
import { AppRegistry, Text, View, Button, StyleSheet, Image, TextInput, ListView, ScrollView } from 'react-native';
import axios from 'axios';
import { getExpenseData } from '../actions';

class Settings extends React.Component {

    componentDidMount() {
      console.log('sending token: ', this.props.user.token);
      this.props.getExpenseData(this.props.user.token);

    }

    render() {
        const ds2 = new ListView.DataSource({
              rowHasChanged: (r1, r2) => r1 !== r2,
              sectionHeaderHasChanged: (s1, s2) => s1 !== s2});

        let objDataTest = {"Food": [{type: "Restaurants", value: "$325.00"},{type: "Groceries", value: "$55.00"}],
                            "Utilities": [{type: "Gas", value: "$17.50"} ,{type:  "Electric", value: "$95.00"}, { type: "Water", value: "$32.00"},{type: "Phone", value: "$18.00"}]
                            // "Transportation": ["Gas", "Repairs"],
                            // "Food1": ["Restaurants", "Groceries"],
                            //                     "Utilities1": ["Gas" , "Electric", "Water", "Phone"],
                            //                     "Transportation1": ["Gas", "Repairs"],
                            //                     "Food2": ["Restaurants", "Groceries"],
                            //                                         "Utilities2": ["Gas" , "Electric", "Water", "Phone"],
                            //                                         "Transportation2": ["Gas", "Repairs"]
                          };
        let objData = {
                      "Food": {
                        "id": 1,
                        "monthlyBudget": "525.00",
                        "spent": "21.22",
                        "subcategories": {
                          "Groceries": {
                            "id": 2,
                            "monthlyBudget": "350.00",
                            "spent": "12.50"
                          },
                          "Restaurants": {
                            "id": 3,
                            "monthlyBudget": "175.00",
                            "spent": "8.72"
                          }
                        }
                      },
                      "Utilities": {
                        "id": 2,
                        "monthlyBudget": "195.00",
                        "spent": "45.12",
                        "subcategories": {
                          "Gas": {
                            "id": 5,
                            "monthlyBudget": "85.00",
                            "spent": "45.12"
                          },
                          "Electric": {
                            "id": 6,
                            "monthlyBudget": "110.00",
                            "spent": 0
                          }
                        }
                      },
                      "Housing": {
                        "id": 3,
                        "monthlyBudget": "850.00",
                        "spent": "800.00",
                        "subcategories": {
                          "Rent": {
                            "id": 4,
                            "monthlyBudget": "850.00",
                            "spent": "800.00"
                          }
                        }
                      },
                      "Giving": {
                        "id": 4,
                        "monthlyBudget": 0,
                        "spent": 0,
                        "subcategories": {}
                      },
                      "Transportation": {
                        "id": 5,
                        "monthlyBudget": "80.00",
                        "spent": "34.82",
                        "subcategories": {
                          "Gasoline": {
                            "id": 12,
                            "monthlyBudget": "80.00",
                            "spent": "34.82"
                          }
                        }
                      },
                      "Insurance and Taxes": {
                        "id": 6,
                        "monthlyBudget": 0,
                        "spent": 0,
                        "subcategories": {}
                      },
                      "Loans": {
                        "id": 7,
                        "monthlyBudget": 0,
                        "spent": 0,
                        "subcategories": {}
                      },
                      "Miscellaneous": {
                        "id": 8,
                        "monthlyBudget": 0,
                        "spent": 0,
                        "subcategories": {}
                      }
                    };
        let mainCategories = Object.keys(objData);
        let element = ds2.cloneWithRowsAndSections(objDataTest);


        return (
            <View style={styles.container}>
                <Text>{this.props.user.firstName}</Text>
                <Image source={require('./Resources/settings.png')} style={styles.icon} />
                <Text style={styles.container}>Settings / Configuration Page</Text>
                <ListView style={{alignSelf: 'stretch'}} dataSource={element}
                    renderSectionHeader={(sectionData, sectionID) =>
                              <View style={{flex: 1, backgroundColor: 'green', flexDirection: 'row', borderColor: 'red', borderWidth: 1}}>
                                  <View style={{flex: 1, borderColor: 'blue', borderWidth: 1}}>
                                    <Text style={{flex: 1, color: 'white', fontSize: 20, alignContent: 'flex-start', borderColor: 'pink', borderWidth: 1}}>+</Text>
                                  </View>
                                  <View style={{flex: 5, color: 'white', fontSize: 20, justifyContent: 'space-between', flexDirection: 'row'}}>
                                    <Text style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                                    <Text style={{color: 'white', fontSize: 20}}>{sectionID}</Text>
                                    <Text style={{color: 'white', fontSize: 20}}>$500.00</Text>
                                  </Text>
                                  </View>
                              </View>}
                    renderRow={(rowData) =>
                              <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row'}}>
                                  <Text style={{fontSize: 15}}>{rowData.type}</Text>
                                  <Text>{rowData.value}</Text>
                              </View>}


                        />

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

const mapStateToProps = (state) => {
  return { user: state.auth.user, expenses: state.expenses };
};

export default connect(mapStateToProps, { getExpenseData })(Settings);
