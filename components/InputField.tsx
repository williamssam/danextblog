import { FC } from "react"


interface Props{
    label: string
    type: string
    id: string
    name: string
    placeholder: string
    value: any
    onChange: (e:any) => void
    error: any
    errorText: string
    fullwidth: boolean
}

const InputField:FC<Props> = ({ label, type, id, name, placeholder, value, onChange, error, errorText, fullwidth }) => {
    return(
        <div className={fullwidth ? `w-full h-14 flex flex-col items-center` : `w-1/2 h-14 flex flex-col items-center`}>
            <label className="block text-gray-700 text-md font-bold mb-2" htmlFor={name}>
                {label}
            </label>
            <input className="w-full h-12 bg-white rounded-md drop-shadow-2xl px-2 border-2 focus:border-2 focus:border-slate-700 focus:outline-none transition-all duration-500" type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} />
            {error && <p className="text-red-500 text-xs font-light">{errorText}</p>}
        </div>
    )
}

export default InputField