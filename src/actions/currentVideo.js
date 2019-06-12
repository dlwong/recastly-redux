import exampleVideoData from '../data/exampleVideoData.js';

var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
  type: 'CHANGE_VIDEO',
  video: exampleVideoData[0]
});

export default changeVideo;
