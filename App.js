import * as React from 'react';
import { View, StyleSheet, Text, StatusBar, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './app/screens/SearchScreen';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Feather } from 'react-native-vector-icons';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import reducers from './app/reducers';
import MySongs from './app/containers/songsContainer';
import Home from './app/screens/Home';
import MyTabs from './app/screens/MyTabsScreen';

const rootReducer = combineReducers({...reducers});
const store = createStore(rootReducer, applyMiddleware(thunk));


function HomeFeed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
      <Home />
    </View>
  );
}

function MyFavTabs() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <MyTabs/>
    </View>
  );
}

function MyFavSongs() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <MySongs />
    </View>
  );
}

function Search() {
  return (
    <View>
      <SearchScreen/>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function BottomNavTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeFeed"
      tabBarOptions={{
        activeTintColor: 'rgb(87, 198, 175)',
        // activeBackgroundColor: '#83FAE7',
      }}
    >
      <Tab.Screen
        name="HomeFeed"
        component={HomeFeed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="MyFavTabs"
        component={MyFavTabs}
        options={{
          tabBarLabel: 'My Tabs',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="guitar-acoustic" color={color} size={20} />
          ),
        }}
      />
         <Tab.Screen
        name="MyFavSongs"
        component={MyFavSongs}
        options={{
          tabBarLabel: 'Songs',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="library-music" color={color} size={20} />
          ),
        }}
      />
         <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Feather name="search" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <Provider store={store}>
        <NavigationContainer>
             <BottomNavTabs />
        </NavigationContainer>
    </Provider>
  );
};

export default App;
