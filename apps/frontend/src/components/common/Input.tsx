import clsx from "clsx"
import { ChangeEvent } from "react"

interface InputProps {
    type: 'text' | 'number' | 'email' | 'password'
    label: string
    value: string | number
    name: string
    placeholder: string
    error?: string
    disabled?: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    icon?: React.ReactNode
}

export default function Input({
    type,
    name,
    disabled,
    placeholder,
    label,
    value,
    onChange,
    error,
    icon,
    ...props
}: InputProps) {
  return (
    <div className="">
        {label && <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1.5">
            {label}
        </label> }
        <div className="relative flex items-center">
            {icon && <span className="absolute left-3 text-[#667085]">{icon}</span> }
            <input 
                type={type}
                name={name}
                id={label}
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
                disabled={disabled}
                className={clsx("w-full rounded-lg border border-gray-100 px-4 py-2.5 text-gray-700 placeholder:text-[#667085] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary", {'pl-10': icon, 'ring-2 ring-red-200': error})}
                {...props}
            />
        </div>
        {error && <p className='ml-3 mt-1 text-sm text-red-600'>{error}</p> }
    </div>
  )
}
