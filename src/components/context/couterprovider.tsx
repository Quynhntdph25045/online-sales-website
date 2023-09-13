import React, { Children, createContext, useReducer } from 'react'


export const countercontext = createContext({}as any)
const intialstate = {
  count: 10,
}
const couterReducer = (state:any, action:any)=>{
  console.log("action",action);
switch(action.type){
  case"increment":
  return { cout:state.cout + 1}
  case"decrement":
  return { cout:state.cout - 1}
  case"increase":
  return { cout:state.cout + action.payload}
  default:
    return state;
}
}
const couterprovider = ({Children}: any) => {
  const [state ,dispatch] = useReducer(couterReducer,intialstate)

  return (
     <countercontext.Provider value={{state , dispatch}}>{Children}</countercontext.Provider>
    )
}

export default couterprovider