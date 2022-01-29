// api key TMDB site
const Api_key="76cc007203619ecc6a83a7c1680d71ef";

const req={
    fetchTrending:`/trending/all/day?api_key=${Api_key}&languages=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${Api_key}&with_network=213`,
    fetchTopRated:`/movie/top_rated?api_key=${Api_key}&languages=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${Api_key}&with_genres=28`,
    fetchComdeyMovies:`/discover/?api_key=${Api_key}&with_genres=35`,
    fetchHorrMovies:`/discover/movie?api_key=${Api_key}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${Api_key}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${Api_key}&with_genres=99`,
}
export default req;