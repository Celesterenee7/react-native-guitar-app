import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default class ImageTabScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
             <Image source = {require('./images/blackbird.jpg')} 
   style = {{ width: 450, height: 450 }}
   />
              
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 200
  }
});