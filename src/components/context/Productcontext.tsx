import { createContext,useContext, useState } from "react";
import axios from"axios"
export const Productcontext = createContext({} as any)

   const productprovider = ({childen}: any)=>{
    const [products , setproduct] = useState<any>([
        { id: 1, name: "Product A" },
        { id: 2, name: "Product B" },
    ] as any);
    const [count,setcount] = useState(0)
    const addproduct = async (product:any)=>{    
  try {
    const {data}= await axios.post(` http://localhost:3000/products`)
    setproduct([...products,product]);

  } catch (error:any) {
    console.log(error.message);
    
  }
    
   }
    return <Productcontext.Provider value={{products, addproduct, count}} >
        {childen}
    </Productcontext.Provider>  
   }
   export default productprovider;