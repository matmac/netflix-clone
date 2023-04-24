import Image from 'next/image'
import { useEffect } from 'react'
import Genres from './Genres'
const PreviewCard = ({ trendingMovies }) => {
  useEffect(() => {
    // console.log(trendingMovies[0])
  }, [])
  return (
    <div className={'flex flex-col mt-[-127px] relative z-30'}>
      <h2 className={'text-white text-xl px-24'}>Trending Movies</h2>
      <div
        className={
          'inline-flex flex-row gap-3 overflow-x-auto relative z-20 px-24 py-8'
        }
      >
        {trendingMovies?.map((movie) => {
          return (
            <div
              key={movie.backdrop_path}
              className={
                'shrink-0 w-[230px] h-[140px] bg-white rounded bg-cover bg-center hover:scale-125 cursor-pointer transition ease-in-out p-2 flex justify-end relative flex-col z-10 hover:z-20'
              }
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
              }}
            >
              <h4 className={'text-white relative z-10'}>
                {movie.original_title}
              </h4>
              <Genres id={movie.id} />
              <div
                className={
                  'absolute inset-0 bg-gradient-to-t from-black/70 z-0'
                }
              ></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PreviewCard
