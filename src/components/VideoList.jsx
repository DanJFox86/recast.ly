import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (
  <ul>
    {props.videos.map(element =>
      <VideoListEntry app={props.app} click={props.click} video={element} />
    )}
  </ul>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;


//props: keyword for assigning new properties
//ul
/*
{/* <div><h5><em>videoListEntry</em> view goes here</h5></div>
<div><h5><em>videoListEntry</em> view goes here</h5></div>
<div><h5><em>videoListEntry</em> view goes here</h5></div>
<div><h5><em>videoListEntry</em> view goes here</h5></div>
<div><h5><em>videoListEntry</em> view goes here</h5></div>
Go back to line 7 later, getting a warning about Each child in an array or iterator should have a unique "key" prop. Check the render method of `VideoList`.

*/