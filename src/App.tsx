import { useState } from 'react'
import { Icar } from './interface/car'
import './App.css'
import Botton from './components/botton';
import Form from './components/form';
import List from './components/list';

function App() {
  const carsData = [
    { id: 1, name: "BMW" },
    { id: 2, name: "Mercedes" },
    { id: 3, name: "Audi" },
];
  const columns = [
    { title: "Tên sản phẩm ", dataIndex:"name"}
  ]
  const [cars, setCars] = useState<Icar[]>(carsData);
  const [isLoading, setIsloading] = useState<boolean>(true);
  const [error, seterror] = useState<null>();
  const addCar = (car: Icar) => {
    setCars([...cars, car]);
};
const onremove = (id:number|string)=>{
  setCars(cars.filter((car)=> car.id !== id))
}
  return (
    <>
            <div className="w-96 mx-auto border border-gray-500 p-2">
                <Form onAdd={addCar}/>
                <List data={cars} onRemove={onremove}/>
            </div>
        </>
);
 
}

export default App
