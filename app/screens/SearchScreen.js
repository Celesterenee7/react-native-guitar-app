import SearchBarNavigator from './../navigation/SearchBarNavigator';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class SearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBarNavigator/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
  }
});