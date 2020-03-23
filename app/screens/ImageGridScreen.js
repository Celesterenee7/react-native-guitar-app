import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default class ImageGridScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.container}>
             <Image source = {{uri:'https://townsquare.media/site/295/files/2015/12/BeatlesForSale_1.jpg?w=980&q=75'}}
   style = {{ width: 160, height: 160 }}
   /></View>
      <View style={styles.container}>
        <Image source = {{uri:'https://d5wt70d4gnm1t.cloudfront.net/media/a-s/artworks/globe-photo-agency-3/48183-262458029854/globe-photo-agency-3-johnny-cash-smoking-and-playing-guitar-800x800.jpg'}}
   style = {{ width: 160, height: 160 }}
   />
      </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    // flexDirection: 'column',
    alignItems: 'center',
  },
  photos: {
    alignContent: 'stretch',
  }
});