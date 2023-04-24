import { use, useEffect, useState } from "react"

const Genres = ({id}) => {
  const baseURL = 'https://api.themoviedb.org/3'
  const API_KEY = 'f247ff737ec8062f3b5e027789eab748'
  const [genres, setGenres] = useState()
  useEffect(() => {
    fetch(`${baseURL}/movie/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('MOVIE', data.genres)
        setGenres(data.genres)
      })
  }, [])
  return (
    <div className={'text-white/60 gap-x-3 text-xs flex flex-row flex-wrap relative z-20'}>{
      genres?.map((genre) => {
        return (
          <div>{genre.name}</div>
        )
      })
    }</div>
  )
}

export default Genres