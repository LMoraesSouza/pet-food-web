import { InputHTMLAttributes } from "react";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export function Input({
    label,
    ...rest
}: InputProps) {
    return(
        <>
            <label className="block text-sm font-medium text-[#628745] mb-1">{label}</label>
            <input 
                className='w-full border-b border-gray-300 focus:border-[#628745] outline-none py-1'
                {...rest}
            />
        
        </>
    )
}