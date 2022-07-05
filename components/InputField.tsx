import React, { FC } from "react"

type InputProps = {
    label?: string
    type: string
    name: string
    placeholder: string
    value: string | number
    onChange: (e:any) => void
    onFocus?: (e: any) => void
    onBlur?: (e: any) => void
    error?: any
    errorText?: string
    fullwidth?: boolean
}

const InputField:FC<InputProps> = ({label, type, name, placeholder, value, onChange, onFocus, onBlur, error, errorText, fullwidth}) => {
    return(
        <div className="my-4">
            <label htmlFor={name} className='text-sm'>{label}</label>
            <div className={fullwidth ? `w-full h-10 flex flex-col items-center focus-within:border-none focus-within:outline-none transition-all duration-500` : `w-1/2 h-10 flex flex-col items-center focus-within:border-none focus-within:outline-none transition-all duration-500`}>
                <input className="w-full h-full bg-white rounded-md drop-shadow-2xl px-2" type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
            </div>
            {error && (<p className="text-red-500 text-xs font-light">
                {errorText}
            </p>)}
        </div>
    )
}

export default InputField