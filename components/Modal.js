import { useEffect, useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
const Modal = ({ modalVisible, setModalVisible, modalContentId, type }) => {
  const baseURL = 'https://api.themoviedb.org/3'
  const API_KEY = 'f247ff737ec8062f3b5e027789eab748'
  const [content, setContent] = useState()
  useEffect(() => {
    fetch(
      `${baseURL}/${
        type === 'tv' ? 'tv' : 'movie'
      }/${modalContentId}?api_key=${API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log('CONTENT', data)
        setContent(data)
      })
  }, [modalContentId])
  return (
    <div
      className={`absolute inset-0 z-50 bg-black/60 flex items-center justify-center ${
        modalVisible ? '' : 'hidden'
      }`}
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
              backgroundImage: `url(https://image.tmdb.org/t/p/original${content?.backdrop_path})`,
            }}
          >
            <div className={'flex flex-col text-white'}>
              <h3 className={'text-3xl text-white'}>{content?.title}</h3>
              <p>Fecha de lanzamiento</p>
              <p>Duración (calcular en horas y minutos)</p>
              <p>Popularidad</p>
            </div>
          </div>
          <div className={'p-8 w-full overflow-y-auto flex flex-row'}>
            <p>{content?.overview}</p>
            <div>
              Cast
              Género
              Revenue
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
