import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Toolbar } from 'react-native-material-ui';


const useStyles = makeStyles(theme => ({
	root: {
	
	},
	textfield: {
		margin: '2vh',
		height: '1em',
		textAlign: 'center',
		color: 'orange',
		fontSize: '30px'
	},
	input: {
		background: 'white',
		borderRadius: '4px',
		color: 'white'

	}
}));


const Searchbox = ({ searchChange, searchTabs }) => {
	const classes = useStyles();
	const onKeyDown = (event) => {
		if (event.key === "Enter" || event.code === "NumpadEnter") {
			searchTabs()
		}
  }
  
	return (
			<Toolbar style={{ container: { backgroundColor: '#57C6AF' }}}
      background='#57C6AF'
      leftElement="menu"

      searchable={{
        autoFocus: true,
        placeholder: 'Search',
      }}
      rightElement={{
        menu: {
            icon: "more-vert",
            labels: ["item 1", "item 2"]
        }
    }}
    onRightElementPress={ (label) => { console.log(label) }}
				id="input-with-icon-textfield"
				label="Search"
				variant="outlined"
				// color="primary"
				onChange={searchChange}
				onKeyDown={onKeyDown}
				className={classes.textfield}
				InputProps={{
					startAdornment: (
						<InputAdornment className={classes.input} position="start">
							<SearchIcon />
						</InputAdornment>
					)
				}}
			/>
	);
}

export default Searchbox