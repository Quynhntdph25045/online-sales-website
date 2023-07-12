import { Icar } from '@/interface/car';
import React from 'react'
import Item from '../item';
type listProps = {
        data: Icar[];
        onRemove: (id: number | string) => void;
}

const List = ({data , onRemove}: listProps) => {
  return (
        <ul>
            {data?.map((car) => (
                <Item   key={car.id} car={car} onRemove={onRemove} />
                // <Item ></Item>
            ))}
        </ul>
    );
}

export default List