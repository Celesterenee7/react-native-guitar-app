import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './screens/SearchScreen';
import HomeScreen from './screens/HomeScreen';
import FavTabsScreen from './screens/FavTabsScreen';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Feather } from 'react-native-vector-icons';
import { StyleSheet, Text, StatusBar, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';

function HomeFeed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <HomeScreen />
    </View>
  );
}

function FavTabs() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <FavTabsScreen/>
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
        activeTintColor: '#048B78',
        activeBackgroundColor: '#83FAE7',
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
        name="FavTabs"
        component={FavTabs}
        options={{
          tabBarLabel: 'My Tabs',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="guitar-acoustic" color={color} size={20} />
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

export default class App extends React.Component {

  state = {
      assetsLoaded: false,
  };

  async componentDidMount() {
      await Font.loadAsync({
          'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf')
      });
  
      this.setState({ assetsLoaded: true });
  }

  render() {

      const {assetsLoaded} = this.state;

      if( assetsLoaded ) {
          return (
              
                   <NavigationContainer>
                      <BottomNavTabs />
                   </NavigationContainer>
              
          );
      }
      else {
          return (
              <View >
                  <ActivityIndicator />
                  <StatusBar barStyle="default" />
              </View>
          );
      }
  }
}
