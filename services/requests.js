const API_KEY = 'f247ff737ec8062f3b5e027789eab748'

const requests = {
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en`,
  fetchTrendingMovies: `/trending/movie/day?api_key=${API_KEY}&language=en`,
  fetchTrendingTv: `/trending/tv/day?api_key=${API_KEY}&language=en`,
}

export default requests