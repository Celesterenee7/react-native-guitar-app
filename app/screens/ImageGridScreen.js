import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default class ImageGridScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
             <Image source = {{uri:'https://raw.githubusercontent.com/Celesterenee7/react-native-guitar-app/master/app/screens/collage_1.JPG'}}
   style = {{ width: 305, height: 305 }}
   />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 100
  }
});