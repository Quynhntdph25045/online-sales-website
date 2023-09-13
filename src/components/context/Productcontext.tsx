// import { createContext,useContext, useState } from "react";
// import axios from"axios"
// export const Productcontext = createContext({} as any)

// const initialState = {
//   products: [],
//   isLoading: false,
//   error: "",
// };
// const productReducer = (state:any , action: any)=>{
//      console.log(action , "action");
//      switch(action.type){
//       case"Fetch_products":
//       return {
//         ...state,
//         products:action.payload
//       }
//       case"ADD_products":
//       return {
//         ...state,
//         products:[...state,action.payload]
//       }
//       default:
//         return state;
//      }
// }

//    const productprovider = ({childen}: any)=>{
//   //   const [products,setproducts] = useState([] as any)
//   //   const addproduct = async (product:any)=>{    
//   // try {
//   //   const {data}= await axios.post(` http://localhost:3000/products`)
//   //   setproducts([...products,data]);

//   // } catch (error:any) {
//   //   console.log(error.message);
    
//   // }
    
//   //  }
//   //  const fetchproduct = async ()=>{
//   //   try {
//   //     const {data}= await axios.get(`http://localhost:3000/products`)
//   //     setproducts(data)
//   //   } catch (error:any) {
//   //     console.log(error.message);
      
//   //   }
//   //  }
//     return <Productcontext.Provider value={{products, addproduct ,fetchproduct}} >
//         {childen}
//     </Productcontext.Provider>  
//    }
//    export default productprovider;