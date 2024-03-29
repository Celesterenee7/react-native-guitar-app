import React from 'react';
import ImageGridScreen from './ImageGridScreen';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';
import Constants from 'expo-constants';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Whats New',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'My Tabs',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Account Profile',
  },
];

function Item({ id, title, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        { backgroundColor: selected ? 'rgb(131, 250, 231)' : 'white' },
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function Home() {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.homeText}>Home</Text>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
    </SafeAreaView>
    <ImageGridScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS == 'ios'? 5 : 0
  },
  mainContainer: {
    width: '100%',
    flex: 1,
  },
  homeText: {
    fontSize: 35,
    marginTop: 50,
    padding: 20
  },
  item: {
    backgroundColor: '#EBEBEB',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomColor: '#DBDBDA',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
  }
});

