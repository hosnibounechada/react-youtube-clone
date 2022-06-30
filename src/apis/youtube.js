import axios from "axios";

const KEY = "AIzaSyBwL31qYAGAD1uXZ2HqQ3Smh26CUvpdkI4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 25,
    key: KEY,
  },
});
