import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default class ImageGridScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
             <Image source = {{uri:'https://townsquare.media/site/295/files/2015/12/BeatlesForSale_1.jpg?w=980&q=75'}}
   style = {{ width: 150, height: 150 }}
   />
        <Image source = {{uri:'https://d5wt70d4gnm1t.cloudfront.net/media/a-s/artworks/globe-photo-agency-3/48183-262458029854/globe-photo-agency-3-johnny-cash-smoking-and-playing-guitar-800x800.jpg'}}
   style = {{ width: 150, height: 150 }}
   />
        <Image source = {{uri:'https://d3gnjjq3mhphne.cloudfront.net/uploads/image/post/022/784/22784/header_vstory/22784_109874_608_59330275_2183135961767382_1434277828550983680_n.jpg'}}
   style = {{ width: 150, height: 150 }}
   />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 250
  }
});