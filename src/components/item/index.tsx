import { Icar } from "@/interface/car";
import Botton from "../botton";

type ItemProps = {
    car: Icar;
    onRemove: (id: number | string) => void;

};

const Item = ({ car, onRemove }: ItemProps) => {
    return (
        <li className="flex justify-between items-center p-2">
            {car.name}
            <Botton type="danger" onClick={()=>onRemove(car.id!)} text="delet" />
        </li>
    );
};

export default Item;