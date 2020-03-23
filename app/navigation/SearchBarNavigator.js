import * as React from 'react';
import { Text, View, StyleSheet, FlatList, ActivityIndicator, Platform } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default class SearchBarNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, search: '' };
    this.arrayholder = [];
  }
  componentDidMount() {
    return fetch('https://my-json-server.typicode.com/Celesterenee7/songs-api/songs')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function() {
            this.arrayholder = responseJson;
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
  search = text => {
    console.log(text);
  };
  clear = () => {
    this.search.clear();
  };
  SearchFilterFunction(text) {
    const newData = this.arrayholder.filter(function(item) {
      const itemData = {name, lyrics};
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: newData,
      search:text,
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <ScrollView>
      <View style={styles.container}>
        <SearchBar
          platform={'ios'}
          lightTheme
          // showLoading
          searchIcon={{ size: 24 }}
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          placeholder="My Tabs..."
          value={this.state.search}
          />
          <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          renderItem={({ item }) => (
            <View>
          <Text key={item.id} style={styles.text}>{item.name}</Text>
          </View>
          )}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'white',
    marginTop: Platform.OS == 'ios'? 15 : 0
  },
  text: {
    // backgroundColor: '#EBEBEB',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomColor: '#DBDBDA',
    borderBottomWidth: 2,
    fontSize: 18
  }
});