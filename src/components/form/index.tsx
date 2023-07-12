import React, { useState } from 'react'
import Botton from '../botton'
import Input from '../input'
import { Icar } from '@/interface/car'
type Props = {
    onAdd: (car: Icar) => void;

}

const Form = ({ onAdd }: Props) => {
    const [value,setvalue] = useState<string>("")
   const onhandlechange = (e: React.ChangeEvent<HTMLInputElement>)=>{
      setvalue(e.target.value)
      // console.log(e.target.value);
      
   }
   const OnhandleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    // console.log(e.target.value);
    e.preventDefault();
  if(!value) return;
  console.log(value);
  
  onAdd({
    id: Math.floor(Math.random()*1000),
    name:value
   })
   setvalue("");
   e.target.reset();
   }
  return (
    <form onSubmit={OnhandleSubmit} className="flex justify-between items-center p-2 border border-red-300">
            <Botton type="danger" shape="default" />
            <Input onChange={onhandlechange}/>
        </form>
  )
}

export default Form


