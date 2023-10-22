// import { getMovieById } from '@/api/movie'
// import { Combo, Movie } from '@/types/movie'
// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'


// interface Iprops {
//     Combo: Combo[]
//     Movies: Movie[]
// }

// const ComboBooking = (props: Iprops) => {
//     const { id } = useParams();

//     const [movieBooking, setMovieBooking] = useState<Movie[]>(); // Biến state để lưu thông tin phim
//   const [combo, setCombo] = useState<Combo[]>([]);

//   useEffect(() => {
//     // Gọi hàm lấy thông tin phim bằng ID khi component được tạo
//     getMovieById(id).then(({ data }) => {
//       setMovieBooking(data);
//     });

//     setCombo(props.Combo);
//   }, [id, props.Combo]);


//     return (
//         <div className='bg-black text-white'>
//             <div className="backdrop">
//                 <img src={movieBooking?.backdrop_path} className='backdrop-img w-full h-[550px] relative'></img>
//             </div>
//             <div className="movies-detail absolute">
//                 <img src={movieBooking?.poster_path} className='w-[350px] border'></img>
//                 <div className="button flex justify-between">
//                     <Link to={'/'}><button className='back border-[3px] border-red-700 rounded-md px-14 py-3'>Back</button></Link>
//                     <Link to={'/'}><button className='next border-[3px] border-[#1ACAAC] rounded-md bg-[#1ACAAC] px-14 py-3'>Next</button></Link>
//                 </div>
//             </div>
//             <div className="movies-title absolute flex justify-between items-center translate-x-[28rem] -translate-y-[4rem] text-white w-[63.875rem]">
//                 <h3 className='text-3xl'>{movieBooking?.title}</h3>
//                 <div className="time flex text-lg items-center space-x-10">
//                     <p>{movieBooking?.time}</p>
//                     <p className='border-2 border-[#1ACAAC] rounded-full px-7 py-2'>{movieBooking?.age}</p>
//                 </div>
//             </div>
//             <div className="booking h-full max-w-[1420px] mx-auto ">
//                 <div className="booking-combo">
//                     <div className="no-content"></div>
//                     <div className="content-right">
//                         <div className="taskbar">
//                             <ul>
//                                 <li className='active'><span>1</span> Chọn ghế</li>
//                                 <li><span>2</span> Combo</li>
//                                 <li><span>3</span> Thanh toán</li>
//                             </ul>
//                         </div>
//                         <div className="choose-combo max-w-4xl mx-auto mt-[7rem]">
//                             {combo.map((item) => (
//                                 <div key={item?.id} className=''>
//                                      <img src={item.image} alt="" />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ComboBooking

import { Combo } from '@/types/movie'
import React, { useEffect, useState } from 'react'

interface Iprops {
  Combo: Combo[]
}

const ComboBooking = (props: Iprops) => {

  const [combo, setCombo] = useState<Combo[]>([])

  useEffect(() => {
    setCombo(props.Combo)
  }, [props])

  return (
    <div>
      <div className='grid grid-cols-2 gap-12 my-[7rem] mx-[4rem]'>
        {combo.map((item) => (
          <div key={item?.id} className='grid grid-cols-3 border-2 border-white rounded-md bg-[#1B3F47] p-3' >
            <img src={item.image} alt="" className='col-span-1 h-[140px] w-full' />
            <div className="col-span-2 space-y-2">
              <h1 className=''>{item.name}</h1>
              <p>{item.price}đ</p>
              <p>*{item.description}</p>
              <span className=''>*{item.sale}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ComboBooking