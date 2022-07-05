import { useState } from "react"

export function useFormFields<T>(initialState: T): [T, (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void] {
    const [inputs, setValues] = useState<T>(initialState);

    return [
        inputs,
        (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            setValues({
                ...inputs,
                [e.target.name]: e.target.value
            })
        }
    ]
}