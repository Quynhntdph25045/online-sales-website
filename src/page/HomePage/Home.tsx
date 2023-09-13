import { useSigninMutation } from '@/api/Ath';
import { useGetProductsQuery } from '@/api/product';
import React from 'react'

import { Link } from "react-router-dom";

const Home = () => {
  const { data: ProductData } = useGetProductsQuery()
  
  return (
    <div className='max-w-7xl mx-auto my-5  border border-gray-300 border-3 p-5 '>
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
     
    </div>
  )
}

export default Home