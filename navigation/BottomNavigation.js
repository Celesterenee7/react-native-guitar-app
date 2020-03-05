import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './../screens/SearchScreen';
import HomeScreen from './../screens/HomeScreen';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Feather } from 'react-native-vector-icons';


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
      <Text>Favorite Tabs</Text>
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

function MyTabs() {
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
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="FavTabs"
        component={FavTabs}
        options={{
          tabBarLabel: 'My Tabs',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="guitar-acoustic" color={color} size={size} />
          ),
        }}
      />
         <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}