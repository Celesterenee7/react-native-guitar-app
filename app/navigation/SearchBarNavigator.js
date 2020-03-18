
import * as React from 'react';
import PropTypes from 'prop-types';
import { Toolbar } from 'react-native-material-ui';
import { View, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class SearchBarNavigator extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
	<View >
	<View>
      <SearchBar
	  	platform={'ios'}
		containerStyle={styles.containerStyle}
		inputContainerStyle={styles.inputContainerStyle}
	    lightTheme
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
	  </View>
	  </View>
    );
  }
}

const styles = StyleSheet.create({
	containerStyle: {
		backgroundColor: 'rgb(238, 238, 238)'
	},
	inputContainerStyle: {
		backgroundColor: 'white'
	}
});



// const SearchBarNavigator = (props) => {
//   const propTypes = {
//     onSearchPressed: PropTypes.func,
//  }

//  async function fetchSongs() {
// 	return async dispatch => {
// 	  dispatch({
// 		type: types.FETCH_SONGS
// 	  });
// 	  try {
// 		let response = await fetch('http://localhost:3000/songs');
// 		if (response.status !== 200) {
// 		  throw new Error('FETCH_ERROR');
// 		}
// 		response = await response.json();
// 		dispatch({
// 		  type: types.FETCH_SONGS_SUCCESS,
// 		  data: response
// 		});
// 	  } catch (error) {
// 		dispatch({
// 		  type: types.FETCH_SONGS_FAILURE,
// 		  error
// 		});
// 	  }
// 	};
//   }
 
// 	return (
// 	<View>
// 	<Toolbar style={{ container: { backgroundColor: '#83FAE7', boxShadow: 'none', height: 60 }}}
// 	onSearchPressed={fetchSongs}
// 	isSearchActive={isSearchActiveInternal}

//         // searchable={{
//         // autoFocus: true,
// 		// 	placeholder: 'Search',
			
// 		//  }}
// 			/>
// 			</View>
// 	);
// }

// export default SearchBarNavigator;