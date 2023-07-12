import React from 'react'

type bottonProps = {
    type?: "primary" | "danger";
    loading?: boolean;
    shape?: "round" | "circle" | "default";
    text?:string;  
    onClick?: () => void;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

const Botton = ({text, type, children, loading, icon,shape ,onClick }: bottonProps) => {
    return (
        <button
        className={`border border-gray-500 py-2 px-4
        ${type === "primary" && "text-white bg-blue-500"}
        ${type === "danger" && "text-white bg-red-500"}
        ${shape === "round" && "rounded-full"}
        ${shape === "circle" && "rounded-full w-10 h-10" }
        ${shape === "default" && "rounded-md"}
`}
onClick={onClick}

    >
        {text }
        {/* {icon && icon} */}
        {children}
    </button>
  )
}

export default Botton