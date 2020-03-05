import * as React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Toolbar } from 'react-native-material-ui';
import {  View, Text } from 'react-native';
import styles from './../App.css';



const SearchBarNavigator = ({ searchChange, searchTabs }) => {
	const onKeyDown = (event) => {
		if (event.key === "Enter" || event.code === "NumpadEnter") {
			searchTabs()
		}
  }
	return (
	<Toolbar style={{ container: { backgroundColor: '#57C6AF', boxShadow: 'none', height: '60px' }}}
        searchable={{
        autoFocus: true,
		placeholder: 'Search'
		
      }}
		
		InputProps={{
		startAdornment: (
		<InputAdornment position="start">
				<SearchIcon />
		</InputAdornment>
					)
				}}
			/>
	);
}

export default SearchBarNavigator;