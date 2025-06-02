import { InputHTMLAttributes } from "react";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    adornment?: React.ReactNode | string;
}

export function Input({
    label,
    adornment,
    ...rest
}: InputProps) {
    return(
        <>
            <label className="block text-sm font-medium text-[#628745] mb-1">{label}</label>
            <div className="flex items-center">
                <input 
                    className='w-full border-b border-gray-300 focus:border-[#628745] outline-none py-1'
                    {...rest}
                />
                {
                    

                    adornment && 
                    <div className="relative right-3">
                        {
                            typeof adornment === 'string' ?
                                <span className=" self-center text-gray-500 ">{adornment}</span>
                            :
                                adornment
                        }
                    </div>
                }
            </div>
        </>
    )
}