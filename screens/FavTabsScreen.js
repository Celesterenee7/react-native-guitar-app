import React, { Component } from 'react';
import { View } from 'react-native';
import { Dimensions } from 'react-native'

export default class FavTabsScreen extends Component {
  render() {
    return (
      <View style ={styles.container}>
      <ImageBackground
           source={require("./images/luke.jpg")}
           style={styles.background}>

         {/* It is in this part I have a problem */}
         <View style ={styles.imageContainer}>
           <Image resizeMode='contain'
                      style ={{width: Dimensions.get('window').width/2, height: Dimensions.get('window').width/2}}
                      source={require("./images/luke.jpg")}/>
           <Image resizeMode='contain'
                  style ={{width: Dimensions.get('window').width/2, height: Dimensions.get('window').width/2}}
                  source={require("./images/luke.jpg")}/>
         </View>
     </ImageBackground>
   </View>
     );
  }
}
