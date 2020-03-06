import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
  TextInput,
  ListView
} from 'react-native';

export default class ListWithSearchView extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {icon:"https://png.icons8.com/user-folder/color/40/2ecc71", description: "The Beatles - Blackbird"},
        {icon:"https://png.icons8.com/find-user-male/color/100/2ecc71", description: "Johnny Cash - Walk The Line"}, 
        {icon:"https://png.icons8.com/desktop/office/40/2ecc71", description: "Joni Mitchell - A Case of You"}, 
        {icon:"https://png.icons8.com/firefox/color/40/2ecc71", description: "Luke Combs - Hurricane"}, 
        {icon:"https://png.icons8.com/pc-on-desk/color/40/2ecc71", description: "Taylor Swift - Call it What You Want"}, 
      ]),
    };
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView style={styles.notificationList} enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(notification) => {
            return (
              <View style={styles.notificationBox}>
                <Image style={styles.image}
                  source={{uri: notification.icon}}/>
                
                <Text style={styles.description}>{notification.description}</Text>
              </View>
            )}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  formContent:{
    flexDirection: 'row',
    marginTop: 50,
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:20,
      borderBottomWidth: 1,
      height:20,
      flexDirection: 'row',
      alignItems:'center',
      flex:1,
      margin:20,
  },
  icon:{
    width:30,
    height:30,
  },
  iconBtnSearch:{
    alignSelf:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  notificationList:{
    marginTop:20,
    padding:50,
  },
  notificationBox: {
    padding:20,
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius:10,
  },
  image:{
    width:45,
    height:45,
  },
  description:{
    fontSize:18,
    color: "#3498db",
    marginLeft:10,
  },
}); 