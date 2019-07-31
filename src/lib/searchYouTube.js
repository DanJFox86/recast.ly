import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {

  server: 'https://www.googleapis.com/youtube/v3/search',
  // TODO
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${options.max}&q=${options.query}&type=video&videoEmbeddable=true&key=${options.key}`,
    type: 'GET',
    success: (data) => {
      callback(data.items);
    }
  });

};

export default searchYouTube;
