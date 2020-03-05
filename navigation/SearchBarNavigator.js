import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
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
	button: {
		margin: '1.5vh',
		color: 'white',
		fontSize: '7em'
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
		<Card className={classes.root} square >
			<Toolbar style={{ container: { backgroundColor: '#57C6AF' }}}
      background='#57C6AF'
      leftElement="menu"
      centerElement="Searchable"
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
		</Card>
	);
}

export default Searchbox