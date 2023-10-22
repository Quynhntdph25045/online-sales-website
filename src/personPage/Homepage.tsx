import React, { useEffect, useState } from 'react'
import { Movie, Genre } from "../types/movie";
import { Rate } from "antd"
import './personPage.css'
import { Link } from 'react-router-dom';


interface Iprops {
  Movies: Movie[],
  genres: Genre[]
}
const HomePage = (props: Iprops) => {

  const [data, setData] = useState<Movie[]>([])
  const [genres, setGenres] = useState<Genre[]>([])

  useEffect(() => {
    setData(props.Movies)
    setGenres(props.genres)
  }, [props])

  const getGenreNames = (genreIds: number[]): string[] => {
    return genreIds.map((genreId) => {
      const genre = genres.find((item) => item.id === genreId);
      return genre ? genre.name : '';
    });
  };

  return (
    <div>
        <div className='max-w-[1420px] mx-auto p-5 grid grid-cols-4 gap-10'>
          {data.map((item) => (
            <div key={item?.id} className='movie-item hover:border  bg-[#0E0E0E]'>
              
                <img src={item.poster_path} alt="" className='h-[420px] w-full' />
                <div className="text my-2 px-3">
                  <h1 className='text-xl font-semibold'>{item.title}</h1>
                  <div className="flex space-x-5 font-semibold text-[#B6B4B4] my-1">
                    <p>{item.time}</p>
                    <p>|</p>
                    <p>{item.release_date}</p>
                  </div>
                  <span className='font-semibold text-[#B6B4B4] block mb-2'>{getGenreNames(item.genre_ids).join(', ')}</span>
                  <Rate allowHalf defaultValue={item.vote_average} disabled />

                  <div className="button mt-2 grid grid-cols-2 gap-2">
                    <Link to={'/'}><button className=' border-[1px] border-white rounded-md py-3 w-full hover:bg-gray-500'>Xem chi tiết phim</button></Link>
                    <Link to={'/booking/' + item?.id}><button className='border-[1px] border-[#1ACAAC] rounded-md bg-[#1ACAAC] py-3 w-full hover:bg-gray-500'>Đặt vé ngay</button></Link>
                </div>
                </div>
            </div>
          ))}
        </div>
      </div>
  );
}
export default HomePage