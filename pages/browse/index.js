import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NetflixLogo from '../../public/images/netflix-logo.svg'
import { BellIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { PlayIcon } from '@heroicons/react/24/solid'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

import requests from '../../services/requests'
import { useEffect } from 'react'

// Components
import PreviewCard from '../../components/PreviewCard'

const baseURL = 'https://api.themoviedb.org/3'
const imageURL = 'https://image.tmdb.org/t/p/original/'

export default function Browse() {
  const [heroMovie, setHeroMovie] = useState()
  const [trendingMovies, setTrendingMovies] = useState()
  // Pedir peli top rated
  useEffect(() => {
    fetch(`${baseURL}${requests.fetchTopRated}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('MOVIES', data.results[0])
        setHeroMovie(data.results[0])
      })
  }, [])

  //Pedir lista de pelis trending
  useEffect(() => {
    fetch(`${baseURL}${requests.fetchTrendingMovies}`).then(res => res.json()).then(data => {
      // console.log('TRENDING MOVIES', data.results)
      setTrendingMovies(data.results)
    })
  }, [])

  return (
    <div className={'bg-black w-screen flex flex-col overflow-y-auto'}>
      <header
        className={'absolute w-screen z-10 flex flex-row items-center justify-between px-8 pt-8'}
      >
        <div className={'flex flex-row items-center relative z-10'}>
          <NetflixLogo className={'scale-75'} />
          <nav className={'ml-8'}>
            <ul className={'flex flex-row gap-6'}>
              <li>
                <Link href="#" className={'text-white'}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className={'text-white'}>
                  TV Shows
                </Link>
              </li>
              <li>
                <Link href="#" className={'text-white'}>
                  Movies
                </Link>
              </li>
              <li>
                <Link href="#" className={'text-white'}>
                  New & Popular
                </Link>
              </li>
              <li>
                <Link href="#" className={'text-white'}>
                  My List
                </Link>
              </li>
              <li>
                <Link href="#" className={'text-white'}>
                  Browse by Languages
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={'relative flex flex-row items-center gap-4 z-10'}>
          <MagnifyingGlassIcon className={'w-6 h-6 text-white'} />
          <Link href="#" className={'text-white'}>
            Kids
          </Link>
          <BellIcon className={'w-6 h-6 text-white'} />
          <img
            className={'inline-block h-12 w-12 rounded-md'}
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div
          className={
            'absolute h-16 w-screen top-0 left-0 bg-gradient-to-b from-black z-0'
          }
        ></div>
      </header>
      <div
        className={
          'relative w-screen h-[750px] z-0 left-0 overflow-hidden flex items-center p-24'
        }
      >
        <div className={'relative z-10 flex flex-col'}>
          <Image
            src={'/images/netflix-movies-tag.svg'}
            width={201}
            height={64}
            className={'w-[100px] h-[32px] ml-1 mb-4'}
            alt=""
          />
          <h2 className={'text-5xl text-white'}>{heroMovie?.original_title}</h2>
          <div className={'flex flex-row items-center mt-4 gap-2'}>
            <Image
              src={'/images/top-10-tag.svg'}
              width={44}
              height={44}
              className={'w-[22px] h-[22px]'}
              alt=""
            />
            <p className={'text-white'}>#1 in TV Shows Today</p>
          </div>
          <p className={'text-white mt-4 max-w-2xl'}>{heroMovie?.overview}</p>
          <div className={'flex flex-row gap-4 mt-4'}>
            <button
              type="button"
              className="inline-flex items-center gap-x-2 rounded bg-white px-3.5 py-2.5 text-lg font-semibold text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <PlayIcon className={'w-6 h-6'}  />
              Play
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-x-2 rounded bg-white/50 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <InformationCircleIcon className={'w-6 h-6'} />
              More info
            </button>
          </div>
        </div>
        <div
          className={
            'absolute top-0 left-0 bg-cover bg-center w-screen h-full z-0 opacity-40'
          }
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${heroMovie?.backdrop_path})`,
          }}
        ></div>
      </div>
      <PreviewCard trendingMovies={trendingMovies} />
    </div>
  )
}
