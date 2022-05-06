import axios from "axios";
const KEY = "AIzaSyBXGyaRFPN7to2R0RsA4tgRikPF7LOgPLU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    type: "video",
    key: KEY,
  },
});
