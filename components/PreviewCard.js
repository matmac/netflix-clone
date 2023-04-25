import Image from 'next/image'
import { useEffect } from 'react'
import Genres from './Genres'
const PreviewCard = ({ tilesData, title, style, setModalVisible, setModalContentId }) => {
  useEffect(() => {
    console.log(tilesData)
  }, [])
  return (
    <div className={`flex flex-col relative z-30 ${style}`}>
      <h2 className={'text-white text-xl px-24'}>{title}</h2>
      <div
        className={
          'inline-flex flex-row gap-2 overflow-x-auto relative z-20 px-24 py-8'
        }
      >
        {tilesData?.map((movie) => {
          return (
            <div
              key={movie.backdrop_path}
              className={
                'shrink-0 w-[230px] h-[140px] bg-white rounded bg-cover bg-center hover:scale-125 cursor-pointer transition ease-in-out p-2 flex justify-end relative flex-col z-10 hover:z-20'
              }
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
              }}
              onClick={() => {
                setModalVisible(true)
                setModalContentId(movie.id)
              }}
            >
              <h4 className={'text-white relative z-10'}>
                {movie.original_title ? movie.original_title : movie.original_name}
              </h4>
              <Genres id={movie.id} style={'text-white/60'} />
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
