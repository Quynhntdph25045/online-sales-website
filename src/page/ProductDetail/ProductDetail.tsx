import { useGetProductByIdQuery } from '@/api/product';
import { useNavigate, useParams } from "react-router-dom";
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useAddCartMutation } from '@/api/cart';


const About = () => {
  const [numProduct, setNumProduct] = useState(1)
  const handleChangeCount = (type: any, limited: any) => {
    if (type === 'increase') {
      if (!limited) {
        setNumProduct(numProduct + 1)
      }
    } else {
      if (!limited) {
        console.log('hihi', type);
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
     "product":productData,
     "quantity": numProduct,
     "userId": user.id,
  }
  AddCart(newProduct).unwrap().then(()=>{alert("thành công")})
   }

  return (
    <div className="continer max-w-4xl mx-auto">
      <div className=' my-10 mx-auto borber border-2 p-3 grid grid-cols-2 flex justify-items-center items-center space-x-5 mx-auto'>
        <div>
          <h2 className='font-bold text-[25px] mb-5'>Chi tiết sản phẩm</h2>
          <img src={productData?.img} alt="" />
        </div>
        <div>
          <p>Name: {productData?.name}</p>
          <p>Price: {productData?.price}</p>
          <p>Pesc: {productData?.desc}</p>
          <p>Quantity: {productData?.quantity}</p>
          <div style={{ marginBottom: '10px' }}>Số lượng</div>
          <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount('decrease', numProduct === 1)}>
            <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
          </button>
          <input type="text" onChange={onChange} defaultValue={1} min={1} className='w-7 ml-5' value={numProduct} />
          {/* <WrapperInputNumber   max={productDetails?.countInStock} min={1} value={numProduct}  /> */}
          <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount('increase', numProduct === productData?.quantity)}>
            <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
          </button> <br />
          <button className='border border-gray-300 rounded-lg mt-3 text-gray-500 px-5 hover:text-red-500' onClick={()=>onHandleAddCart()} >Thêm sản phẩm</button>
        </div>
      </div>
    </div>
  )
}

export default About