import { useEffect, useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Genres from './Genres'
const Modal = ({ modalVisible, setModalVisible, modalContent }) => {
  const baseURL = 'https://api.themoviedb.org/3'
  const API_KEY = 'f247ff737ec8062f3b5e027789eab748'
  const [content, setContent] = useState()
  const [video, setVideo] = useState()

  const checkVideos = () => {}

  useEffect(() => {
    console.log(modalContent?.media_type)
    if (modalContent?.media_type === 'movie') {
      fetch(`${baseURL}/movie/${modalContent.id}/videos?api_key=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
          console.log('VIDEOS DATA', data.results[0].key)
          setVideo(data.results[0].key)
        })
    }
  }, [modalContent])

  return (
    <div
      className={`absolute inset-0 z-50 bg-black/60 flex items-center justify-center ${
        modalVisible ? '' : 'hidden'
      }`}
      onClick={(e) => e.target === e.currentTarget && setModalVisible(false)}
    >
      <div className="relative flex w-9/12 overflow-hidden bg-white shadow-2xl rounded-xl h-4/6 min-h-[750px]">
        <div
          className={
            'absolute top-4 right-4 w-8 h-8 bg-black rounded-full flex items-center justify-center cursor-pointer z-50'
          }
          onClick={() => setModalVisible(false)}
        >
          <XMarkIcon className={'w-6 h-6 text-white'} />
        </div>
        <div className={'w-full'}>
          <div
            className={
              'bg-cover w-full h-[450px] bg-center flex justify-end relative flex-col z-10 p-8'
            }
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${modalContent?.backdrop_path})`,
            }}
          >
            {modalVisible && (
              <iframe
                className={'absolute w-full h-[450px] top-0 left-0'}
                width="420"
                height="315"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                src={`https://www.youtube.com/embed/${video}?autoplay=1`}
              ></iframe>
            )}

            <div className={'flex flex-col text-white'}>
              <h3 className={'text-3xl text-white'}>{modalContent?.title}</h3>
              <p>Fecha de lanzamiento</p>
              <p>Duración (calcular en horas y minutos)</p>
              <p>Popularidad</p>
            </div>
          </div>
          <div className={'p-8 w-full overflow-y-auto flex flex-row'}>
            <p>{modalContent?.overview}</p>
            <div>
              {modalContent ? (
                <Genres id={modalContent.id} style={'text-black'} />
              ) : (
                ''
              )}
              Cast Revenue
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
