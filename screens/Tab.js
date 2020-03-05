import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { ListItem } from 'react-native-material-ui';
import StarRoundedIcon from '@material-ui/icons/StarRounded';


const useStyles = makeStyles(theme => ({
	listItem: {
		[theme.breakpoints.down('md')]: {
			padding: '8px',
		},
	},
	star: {
		width: 'calc(15px + 1vmin)',
		minWidth: '28px',
		color: '#FFDF00',
		marginLeft: '50px'
	},
	link: {
		marginTop: '-0.5vh',
		'&:hover': {
			color: '#770',
		}
	},
	type: {
		paddingLeft: '5px',
		[theme.breakpoints.down('md')]: {
			padding: '6px',
		},
	}
}));

const Tab = ({ id, artist, title }) => {
	const classes = useStyles();
	return (
		<ListItem className={classes.listItem}>
			<Link
				// target="_blank"
				underline="none"
				className={classes.link}
				rel="noopener noreferrer"
				href={`http://www.songsterr.com/a/wa/bestMatchForQueryString?s=${title}&a=${artist}`}>{artist} - {title}
			</Link>
		
			<StarRoundedIcon className={classes.star} />
		</ListItem>
	);
}

export default Tab;