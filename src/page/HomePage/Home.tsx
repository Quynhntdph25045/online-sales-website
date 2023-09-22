import { useGetProductsQuery } from '@/api/product';
import React, { useCallback, useState } from 'react';
import logobanner from "../../assets/one-piece-logo.png";
import { Rate, message } from 'antd';
import { Link } from "react-router-dom";
import Fuse from 'fuse.js';


const Home = () => {
  const { data: productData } = useGetProductsQuery();
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [inputSearchValue ,setInputSearchValue] = useState()
  const fuseOptions = {
    keys: [
      'name',
      'author'
    ],
  };
  const fuse = new Fuse(productData, fuseOptions);
   const onHandlechang = (e:any)=>{
    setInputSearchValue(e.target.value);    
   }
  const handleSearch = useCallback((keyword:any) => {
    // const keyword = e.target.value;
    const results = fuse.search(keyword);
    const matchedProducts = results.map((result) => result.item);
    if (matchedProducts.length === 0 && keyword !== '') {
     message.error('không có sản phẩm phù hợp')
    };
    setSearchResults(matchedProducts);
  }, [fuse]);

  const displayProducts = searchResults.length > 0 ? searchResults : productData;

  return (
    <div className='max-w-[84rem] mx-auto my-16'>
      <img src={logobanner} alt="" className='w-[200px] mx-auto ' />
      <input type="text" placeholder='Search' onChange={onHandlechang}/>
      <button onClick={()=>handleSearch(inputSearchValue)}>search</button>
      <div className="grid grid-cols-4 gap-5  bg-gray-100 p-5">
        {displayProducts?.map((item: any) => (
          <Link to={"/detail/" + item.id} key={item.id}>
            <div className='text-center bg-white p-5'>
              <img className='w-full h-[300px] mix-blend-multiply contrast-100' src={item.img} alt="" />
              <p className='font-semibold line-clamp-2 mt-5'> {item.name}</p>
              <Rate className='mb-1' disabled allowHalf defaultValue={item?.rate} />
              <p className='text-red-600 font-semibold text-lg'> {item.price} VNĐ</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;