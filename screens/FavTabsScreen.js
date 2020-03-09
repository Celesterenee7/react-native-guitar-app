import React, { Component } from 'react'
import { View, Image } from 'react-native'

export default class FlexDirectionBasics extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <Image source = {{uri:'https://d3gnjjq3mhphne.cloudfront.net/uploads/image/post/022/784/22784/header_vstory/22784_109874_608_59330275_2183135961767382_1434277828550983680_n.jpg'}}
   style = {{ width: 200, height: 200 }}
   />
      </View>
    );
  }
};



// const ImagesExample = () => (
//    <Image source = {{uri:'https://d3gnjjq3mhphne.cloudfront.net/uploads/image/post/022/784/22784/header_vstory/22784_109874_608_59330275_2183135961767382_1434277828550983680_n.jpg'}}
//    style = {{ width: 200, height: 200 }}
//    />
// )
// export default ImagesExample