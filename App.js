import * as React from 'react';
import {SafeAreaView} from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import { t } from  'react-native-tailwindcss';

// Navigation
import BottomNavigation from './navigation/BottomNavigation';

// Screens
import HomeScreen from './screens/HomeScreen';
import FavTabsScreen from './screens/FavTabsScreen';
import SearchScreen from './screens/SearchScreen';

export default class App extends React.Component {
  render() {
    return (
      <BottomNavigation />
    );
  }
}


