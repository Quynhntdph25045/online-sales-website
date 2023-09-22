import { useGetProductByIdQuery } from '@/api/product';
import { useParams } from "react-router-dom";
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useAddCartMutation } from '@/api/cart';
import { Rate, message } from 'antd';


const ProductDetail
 = () => {
  const [numProduct, setNumProduct] = useState(1)
  const handleChangeCount = (type: any, limited: any) => {
    if (type === 'increase') {
      if (!limited) {
        setNumProduct(numProduct + 1)
      }
    } else {
      if (!limited) {
        setNumProduct(numProduct - 1)
      }
    }
  }
  const onChange = (e: any) => {
    setNumProduct(Number(e.target.value))
  }
  const { id } = useParams<{ id: string }>();
  const { data: productData } = useGetProductByIdQuery(id || "");
  const [AddCart] = useAddCartMutation()
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;
  console.log(user);
  const onHandleAddCart = () => {
    const newProduct = {
      "product": productData,
      "quantity": numProduct,
      "userId": user?.id,
    }
    if(!user){
      message.error("bạn cần đăng nhập")
    }
    else{
    AddCart(newProduct).unwrap().then(() => message.success("đã thêm vào rỏ hàng"))
    }
  }

  return (
    <div className="continer max-w-[84rem] mx-auto borber border-2 rounded-md my-10">
      <h2 className='font-bold text-3xl mb-5 text-center my-5'>Chi tiết sản phẩm</h2>
      <div className=' p-5 grid grid-cols-2 gap-3 justify-items-center items-center space-x-5'>
        <div>
          <img src={productData?.img} alt="" className='w-[500px]' />
        </div>

        <div>
          <h2 className='font-medium text-xl'>{productData?.name}</h2>

          <div className="thông-tin flex justify-between mr-16 mt-10">
            <div className="tt-1">
              <p>Nhà cung cấp: <span className='font-semibold'>{productData?.supplier}</span></p>
              <p>Tác giả: <span className='font-semibold'>{productData?.author}</span></p>
            </div>
            <div className="tt-2">
              <p>Nhà xuất bản: <span className='font-semibold'>{productData?.publishing}</span></p>
              <p>Hình thức bìa: <span className='font-semibold'>{productData?.form}</span></p>
            </div>
          </div>

          <Rate className='block' disabled allowHalf defaultValue={productData?.rate} />

          <p className='text-red-500 text-3xl font-semibold my-6'>{productData?.price} VNĐ</p>

          <div className='flex items-center'>
            <p className=' mr-10'>Số lượng:</p>
            <div className="number border w-[170px] rounded space-x-5">
            <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: "10px" }} onClick={() => handleChangeCount('decrease', numProduct === 1)}>
              <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
            </button>
            <input type="text" onChange={onChange} defaultValue={1} min={1}  className='w-12 mx-5 text-center' value={numProduct}/>
            <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: "10px"}} onClick={() => handleChangeCount('increase', numProduct === productData?.quantity)}>
              <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
            </button>
            </div>
          </div>
          <button className='mt-6 border py-3 w-full bg-red-600 text-white font-medium hover:bg-red-500 rounded-md' onClick={() => onHandleAddCart()} >Thêm sản phẩm</button>
          <button className='mt-6 border py-3 w-full bg-red-600 text-white font-medium hover:bg-red-500 rounded-md' onClick={() => onHandleAddCart()} >đặt hàng</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
