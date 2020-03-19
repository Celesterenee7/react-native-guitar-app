import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import MyTabsScreen from './MyTabsScreen';

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
    const {name, lyrics, chords, tabs} = this.state;
    const song = {name, lyrics, chords, tabs};
    this.props.actions.createSong(song);
    this.setState({name: '', lyrics: '', chords: '', tabs: ''});
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
      <ScrollView>
      <View>
        <MyTabsScreen/>
        </View>
        {this._renderSongs()}
        {this._renderCreateForm()}
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    marginBottom: 10,
    width: '80%'
  },
  inputContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});


