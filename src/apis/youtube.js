import axios from 'axios';

const KEY = 'AIzaSyDCJU7vD3L5pDHL-yzl0yiO6QS6FgrH7No';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});