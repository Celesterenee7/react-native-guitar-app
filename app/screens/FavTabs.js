import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import FavTabsScreen from './FavTabsScreen';

export default class FavTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: '',
    };
  }

  UNSAFE_componentWillMount() {
    this.props.actions.fetchSongs();
  }

  _createSong = () => {
    const {name, lyrics, chords} = this.state;
    const song = {name, lyrics, chords};
    this.props.actions.createSong(song);
    this.setState({name: '', lyrics: '', chords: ''});
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
           <TextInput
          style={styles.textfield}
          placeholder={'Lyrics'}
          onChangeText={lyrics => this.setState({lyrics})}
          value={this.state.lyrics}
        />
          <TextInput
          style={styles.textfield}
          placeholder={'Chords'}
          onChangeText={chords => this.setState({chords})}
          value={this.state.chords}
        />
        <Button color="rgb(87, 198, 175)" title="Add Song" onPress={this._createSong} />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
      <View>
        <FavTabsScreen/>
        </View>
        {this._renderSongs()}
        {this._renderCreateForm()}
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  mainContainer: {
    width: '100%',
    flex: 1,
  },
  lyrics: {
    paddingLeft: 20,
    paddingBottom: 10
  },
  textfield: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 10,
    // marginTop: 8,
    marginBottom: 10,
    width: '80%'
  },
  inputContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
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