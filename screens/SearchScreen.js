
import SearchBarNavigator from './../navigation/SearchBarNavigator';
import React, { Component } from 'react';
import { View } from 'react-native';

export default class SearchScreen extends Component {
  render() {
    return (
      <View>
        <SearchBarNavigator/>
      </View>
    );
  }
};
