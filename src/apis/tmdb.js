import axios from 'axios';

const API_KEY = 'f2498a92ab93cbe7b215873d645069b2';
const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;