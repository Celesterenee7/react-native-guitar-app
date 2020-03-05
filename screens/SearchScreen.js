import React, { useState } from 'react';
import SearchBarNavigator from './../navigation/SearchBarNavigator';
// import Spinner from './components/Spinner';
import TabsList from './TabsList';
import Typography from '@material-ui/core/Typography';
import { Button, View, Text } from 'react-native';


const SearchScreen = () => {
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchfield, setSearchfield] = useState('');
  const [message, setMessage] = useState('');

  const onSearchChange = (event) => {
     setSearchfield(event.target.value)
  }

  const onSearchTabs = () => {
    setTabs([]);
    setLoading(true)
      fetch(`https://www.songsterr.com/a/ra/songs.json?pattern=${searchfield}`)
        .then(response => response.json())
        .then(items => {
          if (items.length === 0) {
            setMessage('No results found :('); setLoading(false)
          } else {
            setTabs(items); setLoading(false)
          }
        })
  }

  return (
      <View >
        <SearchBarNavigator 
          searchChange={onSearchChange}
          searchTabs={onSearchTabs}
        />
        {/* <Text>Hellooooooo</Text> */}
        {
          loading
            ? <Spinner />
            : tabs.length===0
              ?  <Typography gutterBottom>
                  {message}
                 </Typography>
              : <Text>
                <TabsList tabs={currentTabs}/>
              <Text>Hellooooooo</Text>
              </Text>
        }      
      </View>
  );
}

export default SearchScreen;