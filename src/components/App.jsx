

var App = () => (
  <div>
    <nav className="navbar">
      <div className="search-bar">
        <div><h5><em>search</em> view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="video-player">
        <div><h5><em>videoPlayer</em> view goes here</h5></div>
      </div>
      <div className="video-list">
        <div><h5><em>VideoList</em> view goes here</h5></div>
      </div>
    </div>
  </div>
);




// hey hopefully this initiates a change

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

