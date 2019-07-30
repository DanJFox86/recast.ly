import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

var App = () => (
  <div>
    <nav className="navbar">
      <div className="search-bar">
        <Search/>
      </div>
    </nav>
    <div className="row">
      <div className="video-player">
        <VideoPlayer/>
      </div>
      <div className="video-list">
        <VideoList videos={exampleVideoData}/>
      </div>
    </div>
  </div>
);




// hey hopefully this initiates a change

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

