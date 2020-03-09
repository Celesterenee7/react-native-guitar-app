import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {NativeRouter, Switch, Route} from 'react-router-native';
import { t } from  'react-native-tailwindcss';

// Navigation
import BottomNavigation from './navigation/BottomNavigation';

// Screens
import HomeScreen from './screens/HomeScreen';
import FavTabsScreen from './screens/FavTabsScreen';
import SearchScreen from './screens/SearchScreen';

function App() {
  return (
    <SafeAreaView style={[t.bgGray100, t.flex, t.hFull , t.wFull]}>
      <Switch>
        <Route exact path='/' component={HomeScreen}/>
        <Route exact path='/favtabs' component={FavTabsScreen}/>
        <Route exact path='/search' component={SearchScreen}/>
      </Switch>
      <BottomNavigation />
    </SafeAreaView>
  );
}

export default () => (
  <NativeRouter>
    <App/>
  </NativeRouter>
)


