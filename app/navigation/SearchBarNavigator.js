import * as React from 'react';
import PropTypes from 'prop-types';
import { Toolbar } from 'react-native-material-ui';
import { View } from 'react-native';


const SearchBarNavigator = (props) => {
  const propTypes = {
    onSearchPressed: PropTypes.func,
 }
 
	return (
	<View>
	<Toolbar style={{ container: { backgroundColor: '#83FAE7', boxShadow: 'none', height: 60 }}}
        searchable={{
        autoFocus: true,
		    placeholder: 'Search'
		 }}
			/>
			</View>
	);
}

export default SearchBarNavigator;