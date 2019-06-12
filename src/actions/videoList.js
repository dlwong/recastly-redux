import exampleVideoData from '../data/exampleVideoData.js';

var changeVideoList = (videos) => ({
  //TODO:  Return some action object to change the list of videos in VideoList.
  type: 'CHANGE_VIDEO_LIST',
  videos: exampleVideoData
});

export default changeVideoList;
