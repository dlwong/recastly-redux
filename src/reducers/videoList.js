import Redux from 'redux';
import changeVideoList from '../actions/videoList';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.

  //if changeVideoList.type === change_video_test
  //do something with videos state
  //else
  //no change to state

  if (action.type === 'CHANGE_VIDEO_LIST') {
    // somehow push video data into array
    return action.videos;
  } else {
    return state;
  }
};

export default videoListReducer;
