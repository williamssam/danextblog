import { FC } from "react"
import { Close } from '../icons'

interface Props {
    type: string
    message: string
    onClose: () => void
}

const Alert: FC<Props> = ({ type, message, onClose }) => {
    if(type === 'success') {
        return (
            <div className="w-1/2 h-14 flex items-center justify-between p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                <span className="font-medium">
                    {message}
                </span>
                <span className="w-8 h-8 rounded-full cursor-pointer hover:bg-slate-200 flex items-center justify-center" onClick={onClose}>
                    <Close />
                </span>
            </div>
        )
    }

    if(type === 'error') {
        return (
            <div className="w-1/2 h-14 flex items-center justify-between p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                <span className="font-medium">
                    {message}
                </span>
                <span className="w-8 h-8 rounded-full cursor-pointer hover:bg-slate-200 flex items-center justify-center" onClick={onClose}>
                    <Close />
                </span>
            </div>
        )
    }

    if(type === 'warning') {
        return (
            <div className="w-1/2 h-14 flex items-center justify-between p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
                <span className="font-medium">
                    {message}
                </span>
                <span className="w-8 h-8 rounded-full cursor-pointer hover:bg-slate-200 flex items-center justify-center" onClick={onClose}>
                    <Close />
                </span>
            </div>
        )
    }
    
    return (
        <div className="w-1/2 h-14 flex items-center justify-between p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
            <span className="font-medium">
                {message}
            </span>
            <span className="w-8 h-8 rounded-full cursor-pointer hover:bg-slate-200 flex items-center justify-center" onClick={onClose}>
                <Close />
            </span>
        </div>
    )
}

export default Alert