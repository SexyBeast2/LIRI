//npm install dotenv / axios / node-spotify-api

const dotenv = require('dotenv').config();
var keys = require("./keys.js");
const axios = require("axios");
const spotify = require("node-spotify-api");

axios.get("http://www.omdbapi.com/?apikey=296ab7cc").then(function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);
  }
); 

//"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
 
// var spotify = new Spotify({
//   id: <your spotify client id>,
//   secret: <your spotify client secret>
// });
 
{/* spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
}); */}