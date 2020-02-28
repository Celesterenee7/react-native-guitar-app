import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

function HomeFeed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', activeBackgroundColor: 'blue' }}>
      <Text>Home</Text>
    </View>
  );
}

function FavTabs() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favorite Tabs</Text>
    </View>
  );
}

function Songs() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Songs</Text>
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
        activeBackgroundColor: 'blue',
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
        name="Songs"
        component={Songs}
        options={{
          tabBarLabel: 'Songs',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="music" color={color} size={size} />
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


