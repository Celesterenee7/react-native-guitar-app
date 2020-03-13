import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';

export default class FavTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  UNSAFE_componentWillMount() {
    this.props.actions.fetchSongs();
  }

  _createSong = () => {
    const {name} = this.state;
    const song = {name};
    this.props.actions.createSong(song);
    this.setState({name: ''});
  };

  _renderSong(song) {
  return (
    <View key ={song.id} style={styles.lyrics}>
    <Text>{song.name}</Text>
    <Text>{song.lyrics}</Text>
    <Text>{song.chords}</Text>
    <Text>{song.tabs}</Text>
    </View>
   );
  }

  _renderSongs() {
    const {data, status} = this.props.songs;
    if (status === 'failure') {
      return <Text>{'Error'}</Text>;
    } else if (status == 'loading') {
      return <Text>{'Loading'}</Text>;
    }
    return <View>{data.map(song => this._renderSong(song))}</View>;
  }

  _renderCreateForm() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textfield}
          placeholder={'Name'}
          onChangeText={name => this.setState({name})}
          value={this.state.name}
        />
        <Button color="#83FAE7" title="Add Song" onPress={this._createSong} />
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this._renderSongs()}
        {this._renderCreateForm()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    marginHorizontal: 16,
  },
  lyrics: {
    flex: 1,
    padding: 20,
  },
  textfield: {
    backgroundColor: '#eee',
    padding: 16,
    marginTop: 8,
    marginBottom: 10
  },
  inputContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
});




// import React, { Component } from 'react';
// import ImageTabScreen from './ImageTabScreen';
// import {
//   SafeAreaView,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import Constants from 'expo-constants';


// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'Whats New',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'My Tabs',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Account Profile',
//   },
// ];

// function Item({ id, title, selected, onSelect }) {
//   return (
//     <TouchableOpacity
//       onPress={() => onSelect(id)}
//       style={[
//         styles.item,
//         { backgroundColor: selected ? 'rgb(131, 250, 231)' : 'white' },
//       ]}
//     >
//       <Text style={styles.title}>{title}</Text>
//     </TouchableOpacity>
//   );
// }

// export default function FavTabs() {
//   const [selected, setSelected] = React.useState(new Map());

//   const onSelect = React.useCallback(
//     id => {
//       const newSelected = new Map(selected);
//       newSelected.set(id, !selected.get(id));

//       setSelected(newSelected);
//     },
//     [selected],
//   );

//   return (
//     <View style={styles.mainContainer}>
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={({ item }) => (
//           <Item
//             id={item.id}
//             title={item.title}
//             selected={!!selected.get(item.id)}
//             onSelect={onSelect}
//           />
//         )}
//         keyExtractor={item => item.id}
//         extraData={selected}
//       />
//     </SafeAreaView>
//     <ImageTabScreen/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     flex: 1,
//     marginTop: Constants.statusBarHeight,
//     marginBottom: 0
//   },
//   mainContainer: {
//     width: '100%',
//     flex: 1,
//   },
//   item: {
//     backgroundColor: '#EBEBEB',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderBottomColor: '#DBDBDA',
//     borderBottomWidth: 1,
//   },
//   title: {
//     fontSize: 18,
//   },
// });