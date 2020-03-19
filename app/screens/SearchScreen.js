import SearchBarNavigator from './../navigation/SearchBarNavigator';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class SearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.searchText}>Search</Text>
        <SearchBarNavigator/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  searchText: {
    fontSize: 40,
    marginTop: 50,
    padding: 10
  }
});

