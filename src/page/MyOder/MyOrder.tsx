import { useGetCartsQuery, useRemoveCartMutation } from '@/api/cart';
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';


const MyOrder = () => {
  const navigate = useNavigate()
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;
  if (!user) {
    return (
      <div className='max-w-7xl mx-auto my-5  border border-gray-300 border-3 p-5 text-center' >
        <p>Không có sản phẩm</p>
      </div>
    )
  }
else{
  const { data } = useGetCartsQuery();
  const [Removecart] = useRemoveCartMutation()
  const [data1,setdata] =useState([])
  useEffect(()=>{
    setdata(data?.filter((item:any)=>(item.userId == user.id)))
  },[data]) 
  const onHandleReomveCart = (id:any) => {
    Removecart(id).unwrap().then(()=>{ alert('xóa thành công')})
  }
  return (
    <div className='max-w-7xl mx-auto my-5  border border-gray-300 border-3 p-5 '>
      <div className=' item-search justify-center flex '>
        <input className=' border text-center rounded-2xl px-10 hover:outline-offset-2' placeholder='Search' type="text" />
      </div>
      <h3 className='font-bold text-2xl'> Sản Phẩm</h3>
        {data1?.map((item: any) => (
         <div key={item.id} className=' justify-items-center items-center  grid grid-cols-5 my-5'>
           <div className='img max-w-[100px]'> <img  src={item.product.img} alt="" /></div>
              <div><p className='font-bold'> {item?.product.name}</p></div>
              <div><p className='font-bold'> {item?.product.price}</p></div>
              <div><p className='font-bold'>số lượng: {item.quantity}</p></div>
              <div className='flex  space-x-4  justify-items-center'>
                <p>tổng giá: {item.quantity * item.product.price} VNĐ</p> 
                <button className='bg-red-300 rounded-xl px-2' onClick={()=>onHandleReomveCart(item.id)}>xóa</button>
              </div>
         </div>
        ))}
      </div>
  )
}
  
 
}

export default MyOrder