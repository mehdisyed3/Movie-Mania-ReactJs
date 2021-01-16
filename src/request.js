const API_Key = '30b033655413f99444343fc0148ecfa4'

export default {
  fetchTrending:`/trending/all/week?api_key=${API_Key}$language=en-US`,
  fetchTopRated:`/movie/top_rated?api_keys=${API_Key}$language=en-US`,
  fetchActionMovies: `/discover/?api_keys=${API_Key}$with_genres=28`,
  fetchComedyMovies: `/discover/?api_keys=${API_Key}$with_genres=35`,
  fetchHorrorMovies: `/discover/?api_keys=${API_Key}$with_genres=27`,
  fetchRomanticMovies:`/discover/?api_keys=${API_Key}$with_genres=10749`,
  fetchMystery: `/discover/?api_keys=${API_Key}$with_genres=9648`,
  fetchSciFi:`/discover/?api_keys=${API_Key}$with_genres=878`,
  fetchWestern:`/discover/?api_keys=${API_Key}$with_genres=37`,
  fetchAnimation:`/discover/?api_keys=${API_Key}$with_genres=16`,
  fetchTv:`/discover/?api_keys=${API_Key}$with_genres=10770,`
}