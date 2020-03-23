import React, { Component } from 'react';
import {
  SafeAreaView,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Constants from 'expo-constants';

const DATA = [
  {
    isExpanded: false,
    artist_name: 'The Beatles', 
    // image: require('./images/home-photo.png'),
    subcategory: [{ id: 1, val: 'Blackbird' }, { id: 2, val: 'Help' }],
  },
  {
    isExpanded: false,
    artist_name: 'Johnny Cash',
    subcategory: [{ id: 4, val: 'Walk The Line' }, { id: 5, val: 'One' }],
  },
  {
    isExpanded: false,
    artist_name: 'Luke Combs',
    subcategory: [{ id: 7, val: 'Falling All Over Again' }, { id: 9, val: 'Hurricane' }],
  },
  {
    isExpanded: false,
    artist_name: 'Joni Mitchell',
    subcategory: [{ id: 7, val: 'A Case of You' }, { id: 9, val: 'California' }],
  },
  {
    isExpanded: false,
    artist_name: 'Damien Rice',
    subcategory: [{ id: 7, val: 'Delicate' }, { id: 9, val: 'The Professor' }],
  },
  {
    isExpanded: false,
    artist_name: 'Novo Amor',
    subcategory: [{ id: 7, val: 'Anchor' }, { id: 9, val: 'State Lines' }],
  },
  {
    isExpanded: false,
    artist_name: 'Tracy Chapman',
    subcategory: [{ id: 7, val: 'Fast Car' }, { id: 9, val: 'Give Me One Reason' }],
  }
];

class ExpandableItemComponent extends Component {
  constructor() {
    super();
    this.state = {
      layoutHeight: 0,
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.item.isExpanded) {
      this.setState(() => {
        return {
          layoutHeight: null,
        };
      });
    } else {
      this.setState(() => {
        return {
          layoutHeight: 0,
        };
      });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layoutHeight !== nextState.layoutHeight) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={this.props.onClickFunction}
          style={styles.header}>
          <Text style={styles.headerText}>{this.props.item.artist_name}</Text>
        </TouchableOpacity>
        <View
          style={{
            height: this.state.layoutHeight,
            overflow: 'hidden',
          }}>
          {this.props.item.subcategory.map((item, key) => (
            <TouchableOpacity
              key={item.id}
              style={styles.data}
              onPress={() => alert('Do you like my app? :)')}>
              <Text style={styles.text}>
                 {item.val}
              </Text>
              <View style={styles.separator} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

export default class MyTabs extends Component {
  constructor() {
    super();
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = { listDataSource: DATA };
  }

  updateLayout = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...this.state.listDataSource];
    array.map((value, placeindex) =>
      placeindex === index
        ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
        : (array[placeindex]['isExpanded'] = false)
    );

    this.setState(() => {
      return {
        listDataSource: array,
      };
    });
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.myTabsText}>My Tabs</Text>
        <SafeAreaView style={styles.container}>
        <ScrollView>
          {this.state.listDataSource.map((item, key) => (
            <ExpandableItemComponent
              key={item.artist_name}
              onClickFunction={this.updateLayout.bind(this, key)}
              item={item}
            />
          ))}
        </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: Platform.OS == 'ios'? 5 : 0
  },
  mainContainer: {
    width: '100%',
    flex: 1,
  },
  myTabsText: {
    fontSize: 35,
    marginTop: 50,
    padding: 20
  },
  header: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomColor: '#DBDBDA',
    borderBottomWidth: 1,
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 16,
  },
  headerText: {
    fontSize: 18,
  },
  separator: {
    height: 0.5,
    marginLeft: 16,
    marginRight: 16,
  },
  text: {
    fontSize: 16,
    paddingLeft: 20,
    paddingBottom: 8,
    paddingTop: 10,
    color: 'rgb(87, 198, 175)'
  },
  data: {
    paddingLeft: 20,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
});

