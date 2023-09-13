import React from 'react'
import { AiOutlineMail, AiOutlinePhone, AiFillHome, AiOutlineLogout, AiOutlineShopping } from "react-icons/ai";
import { Outlet, useNavigate } from "react-router-dom";
import banner from "../assets/banner.jpg"
const LayoutHomepage = () => {
  const navigate = useNavigate()
  const Logout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/")
  }
  return (
    <div className="container mx-auto bg-white ">
      <header>
        <div className='flex justify-between mx-20  py-5'>
          <div className="logo flex items-center text-2xl font-bold text-red-300">Fastfood</div>
          <div className='flex space-x-6'>
            <nav >
              <ul className='flex space-x-5 text-lg '>
                <li> <a href="/" className='flex items-center hover:text-gray-300  '> < AiFillHome />Home page</a></li>
                <li><a href="" className=' hover:text-gray-300'>About us </a></li>
                <li><a href="" className=' hover:text-gray-300'>Trademark</a></li>
                <li><a href="/cart" className=' flex items-center hover:text-gray-300'>Oder <AiOutlineShopping size={25} /></a></li>
              </ul>
            </nav>
            <button className='flex space-x-5 text-xl font-bold bg-gray-200 rounded-3xl px-4  hover:text-gray-300'><a href=" /signin"> Signin </a></button>
            <button className="flex items-center" onClick={() => Logout()}>Long out <AiOutlineLogout /> </button>
          </div>
        </div>
        <div className="banner">
          <img className='w-full' src={banner} alt="" />
        </div>
      </header>
      <main className=''>
        <div className=''><Outlet /></div>
      </main>
      <footer>
        <div className="grid grid-cols-3 justify-items-center ">
          <div className='space-y-1'>
            <span className='block text-2xl font-bold text-red-300  '>Fastfood</span>
            <span className='block'>Tuyển dụng</span>
            <span className='block'>Khuyến mãi</span>
          </div>
          <div className='space-y-1'>
            <span className='block text-xl font-bold  '>Chính sách</span>
            <span className='block '>Chính sách giao hàng</span>
            <span className='block'>Chính sách thanh toán</span>
            <span className='block'>Chính sách đổi trả</span>
            <span className='block'>Chính sách kiểm hàng</span>
            <span className='block'>Chính sách bảo mật thông tin </span>
          </div>
          <div className='space-y-1'>
            <span className='block text-xl font-bold  '>Liên hệ</span>
            <span className='flex items-center'><AiOutlineMail />: datplt2003qm@gmail.com</span>
            <span className='flex items-center'><AiOutlinePhone />:0364649978</span>
            <span className='block'>zalo:0364649978</span>
          </div>
        </div>
        <div className='bg-sky-900 text-center mt-3  text-white felx text-center py-3'><span className=''>@2023 Fastfood </span></div>
      </footer>
    </div>
  );
}

export default LayoutHomepage