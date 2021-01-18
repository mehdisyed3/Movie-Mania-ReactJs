const API_Key = '041da1702f14e5501a7c9afbe680dcaf'

const endpoints={
  fetchTrending:`https://api.themoviedb.org/3/trending/all/week?api_key=041da1702f14e5501a7c9afbe680dcaf&region=US&with_release_type=4|1`,
  fetchTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=041da1702f14e5501a7c9afbe680dcaf&region=US&with_release_type=4|1`,
  fetchActionMovies: `/discover/?api_key=41da1702f14e5501a7c9afbe680dcaf$with_genres=28`,
  fetchComedyMovies: `/discover/?api_key=$41da1702f14e5501a7c9afbe680dcaf$with_genres=35`,
  fetchHorrorMovies: `/discover/?api_key=41da1702f14e5501a7c9afbe680dcaf$with_genres=27`,
  fetchRomanticMovies:`/discover/?api_key=41da1702f14e5501a7c9afbe680dcaf$with_genres=10749`,
  fetchMystery: `/discover/?api_key=41da1702f14e5501a7c9afbe680dcaf$with_genres=9648`,
  fetchSciFi:`/discover/?api_key=41da1702f14e5501a7c9afbe680dcaf$with_genres=878`,
  fetchWestern:`/discover/?api_key=41da1702f14e5501a7c9afbe680dcaf$with_genres=37`,
  fetchAnimation:`/discover/?api_key=41da1702f14e5501a7c9afbe680dcaf$with_genres=16`,
  fetchTv:`/discover/?api_key=41da1702f14e5501a7c9afbe680dcaf$with_genres=10770,`
}

export default endpoints