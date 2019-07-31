import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {

  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideoInPlayer: exampleVideoData[0]
    };
  }

  onListItemClick(video) {
    var videoId = video.target.getAttribute('id');
    for (var i = 0; i < this.state.videos.length; i++) {
      if (this.state.videos[i].id.videoId === videoId) {
        var targetVideo = this.state.videos[i];
        break;
      }
    }
    this.setState({
      currentVideoInPlayer: targetVideo
    });
  }

  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {

    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    return (
      <div>
        <nav className="navbar">
          <div className="search-bar">
            <Search/>
          </div>
        </nav>
        <div className="row">
          <VideoPlayer video={this.state.currentVideoInPlayer}/>
          <div className="video-list">
            <VideoList click={this.onListItemClick.bind(this)} videos={this.state.videos}/>
          </div>
        </div>
      </div>
    );
  }
}

























// hey hopefully this initiates a change

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

