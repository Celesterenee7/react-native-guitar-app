import * as types from '../actionTypes/songs';

export function fetchSongs() {
  return async dispatch => {
    dispatch({
      type: types.FETCH_SONGS
    });
    try {
      let response = await fetch('http://localhost:3000/songs');
      if (response.status !== 200) {
        throw new Error('FETCH_ERROR');
      }
      response = await response.json();
      dispatch({
        type: types.FETCH_SONGS_SUCCESS,
        data: response
      });
    } catch (error) {
      dispatch({
        type: types.FETCH_SONGS_FAILURE,
        error
      });
    }
  };
}

export function createSong(song) {
  return async dispatch => {
    dispatch({
      type: types.CREATE_SONG
    });
    try {
      let response = await fetch('http://localhost:3000/songs', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          "Access-Control-Allow-Headers": "Origin,Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
          "Access-Control-Allow-Methods": "POST, OPTIONS"
        },
        body: JSON.stringify({
          song
        }),
      });
      if (response.status !== 200) {
        throw new Error('FETCH_ERROR');
      }
      response = await response.json();
      dispatch({
        type: types.CREATE_SONG_SUCCESS,
        data: response
      });
    } catch (error) {
      dispatch({
        type: types.CREATE_SONG_FAILURE,
        error
      });
    }
  };
}