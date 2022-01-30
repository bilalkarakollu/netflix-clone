const API_KEY = "4402f32b551579d5807f2dbf613deb7a";
const baseURL = 'https://api.themoviedb.org/3';
export const requests = {
    fetchNetflixOrginalsTV: `${baseURL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchNetflixOrginalsMovie: `${baseURL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
    fetchTrendingMovie: `${baseURL}/trending/movie/week?api_key=${API_KEY}`,
    fetchTrendingTV: `${baseURL}/trending/tv/week?api_key=${API_KEY}`,
    fetchTopRatedMovie: `${baseURL}/movie/top_rated?api_key=${API_KEY}`,
    fetchTopRatedTV: `${baseURL}/tv/top_rated?api_key=${API_KEY}`,
};
