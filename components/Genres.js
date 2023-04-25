import { use, useEffect, useState } from 'react'

const Genres = ({ id, style }) => {
  const baseURL = 'https://api.themoviedb.org/3'
  const API_KEY = 'f247ff737ec8062f3b5e027789eab748'
  const [genres, setGenres] = useState()
  useEffect(() => {
    fetch(`${baseURL}/movie/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log('MOVIE', data.genres)
        setGenres(data.genres)
        console.log(data.genres)
      })
  }, [])

  const GetGenres = () => {
    if (genres?.length > 0) {
      genres?.map((genre) => {
        return (
          <div
            className={`${style} gap-x-3 text-xs flex flex-row flex-wrap relative z-20`}
          >
            <div key={genre.name}>{genre.name}</div>
          </div>
        )
      })
    } else {
      return <p className={'text-white'}>No genres.</p>
    }
  }
  return (
    <div
      className={`${style} gap-x-3 text-xs flex flex-row flex-wrap relative z-20`}
    >
      {
        genres?.length > 0 ? genres.map((genre) => {
          return (
            <div
              className={`${style} gap-x-3 text-xs flex flex-row flex-wrap relative z-20`}
            >
              <div key={genre.name}>{genre.name}</div>
            </div>
          )
        }) : <p>No genres</p>
      }
    </div>
  )
}

export default Genres
