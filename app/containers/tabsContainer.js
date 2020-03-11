
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FavTabs from '../screens/FavTabs';
import * as songsActions from '../actions/songsActions';

const actions = {
  ...songsActions,
};

const mapStateToProps = state => ({
  songs: state.songs,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavTabs);