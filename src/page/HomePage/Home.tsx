import { useSigninMutation } from '@/api/Ath';
import { useGetProductsQuery } from '@/api/product';
import React from 'react'
import logobanner from "../../assets/one-piece-logo.png"
import { Rate } from 'antd';

import { Link } from "react-router-dom";

const Home = () => {
  const { data: ProductData } = useGetProductsQuery()

  return (
    <div className='max-w-[84rem] mx-auto my-16'>
      <img src={logobanner} alt="" className='w-[200px] mx-auto'/>
      <div className="grid grid-cols-4 gap-5  bg-gray-100 p-5">
      {ProductData?.map((item: any) => (
        <Link to={"/detail/" + item.id} key={item.id}>
          <div className='text-center bg-white p-5'>
            <img className='w-full h-[300px] mix-blend-multiply contrast-100' src={item.img} alt="" />
            <p className='font-semibold line-clamp-2 mt-5'> {item.name}</p>
            <Rate className='mb-1' disabled allowHalf defaultValue={item?.rate}/>
            <p className='text-red-600 font-semibold text-lg'> {item.price} VNĐ</p>
          </div>
        </Link>
      ))}
      </div>

    </div>
  )
}

export default Home


{/* <div className='max-w-8xl mx-auto my-5  border border-gray-300 border-3 p-5 '>
       <div className='item-products grid grid-cols-3 gap-5 mt-5 justify-items-center items-center'>
        {ProductData?.map((item: any) => (
          <Link to={"/detail/"+ item.id}>
          <div key={item.id} className='border rounded-md  border-1 space-x-4  w-[300px] content-center'>
             <img className=' h-[300px]' src={item.img} alt="" /> 
         <p className='font-bold'> {item.name}</p>
         <p className=' text-gray-300'> {item.title}</p>
            <p className='font-bold'> {item.price} VNĐ</p>
          </div>
          </Link>
        ))}
      </div>
     
    </div> */}