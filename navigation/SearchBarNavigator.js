import * as React from 'react';
import { Toolbar } from 'react-native-material-ui';
import { View } from 'react-native';


const SearchBarNavigator = ({ searchChange, searchTabs }) => {
	const onKeyDown = (event) => {
		if (event.key === "Enter" || event.code === "NumpadEnter") {
			searchTabs()
		}
  }
	return (
	<View>
	<Toolbar style={{ container: { backgroundColor: '#57C6AF', boxShadow: 'none', height: 60 }}}
        searchable={{
        autoFocus: true,
		placeholder: 'Search'
		 }}
			/>
			</View>
	);
}

export default SearchBarNavigator;