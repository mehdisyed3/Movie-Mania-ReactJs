const API_Key = '041da1702f14e5501a7c9afbe680dcaf'

const endpoints={
  fetchTrending:`https://api.themoviedb.org/3/trending/all/week?api_key=041da1702f14e5501a7c9afbe680dcaf&region=US&with_release_type=4|1`,
  fetchTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=041da1702f14e5501a7c9afbe680dcaf&region=US&with_release_type=4|1`,
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=041da1702f14e5501a7c9afbe680dcaf&with_genres=28`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=041da1702f14e5501a7c9afbe680dcaf&with_genres=35`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=041da1702f14e5501a7c9afbe680dcaf&with_genres=27`,
  fetchRomanticMovies:`https://api.themoviedb.org/3/discover/movie?api_key=041da1702f14e5501a7c9afbe680dcaf&region=US&with_genres=10749`,
  fetchMystery: `https://api.themoviedb.org/3/discover/movie?api_key=041da1702f14e5501a7c9afbe680dcaf&with_genres=9648`,
  fetchSciFi:`https://api.themoviedb.org/3/discover/movie?api_key=041da1702f14e5501a7c9afbe680dcaf&with_genres=878`,
  fetchWestern:`https://api.themoviedb.org/3/discover/movie?api_key=041da1702f14e5501a7c9afbe680dcaf&with_genres=37`,
  fetchAnimation:`https://api.themoviedb.org/3/discover/movie?api_key=041da1702f14e5501a7c9afbe680dcaf&with_genres=16`,
  // fetchTv:`https://api.themoviedb.org/3/discover/movies?api_key=041da1702f14e5501a7c9afbe680dcaf&with_genres=10770`,
}

export default endpoints