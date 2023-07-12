import React from "react";

type Props = {
    onChange:(e: React.ChangeEvent<HTMLInputElement>)=>void;
};

const Input = ({onChange}: Props) => {
    return (
        <input
        onChange={onChange}
        className="border border-green-500 p-2 w-full mr-2"
        placeholder="Car Name"
    />
    )
};

export default Input;