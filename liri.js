//npm install dotenv / axios / node-spotify-api

require('dotenv').config();

var keys = require("./keys.js");
console.log(keys.spotify);

const axios = require("axios");

const Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

const title = process.argv.slice(3).join(" ");
const action = process.argv[2];
console.log(process.argv);


function movieThis(title) {
  axios.get("http://www.omdbapi.com/?t=" + title + "&apikey=trilogy").then(function (response) {
    console.log(response.data)
  }
  ).catch(function (err) {
    console.log(err);
  })

};

function bandThis(artist) {

  axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function (response) {
    console.log(response.data)
  })

    .catch(function (err) {
      console.log(err)
    });
};

function spotifyThis(music) {
  spotify.search({ type: 'track', query: music }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    console.log(JSON.stringify(data, null, 2));
    console.log(data.tracks.items[0].name)

  });

};

function switchBoard(action, title) {

  switch (action) {
    case "movie-this":
      movieThis(title)
      break;
    case "concert-this":
      bandThis(title)
      break;
    case "spotify-this-song":
      spotifyThis(title)
      break;
  };

};

switchBoard(action, title);