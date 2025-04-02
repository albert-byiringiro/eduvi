import { ChangeEvent } from "react"

interface InputProps {
    type: 'text' | 'number' | 'email' | 'password'
    label?: string
    value?: string | number
    name?: string
    placeholder?: string
    error?: boolean
    disabled?: boolean
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    className?: string
}

export default function Input({ type, label, value, name, placeholder, error, disabled, onChange}: InputProps) {
  return (
    <div className="">
        <label htmlFor={label} className="block text-base font-medium text-gray-700 mb-2">{label}</label>
        <input 
            type={type}
            id={label}
            value={value}
            name={name}
            placeholder={placeholder} 
            onChange={onChange}
            disabled={disabled}
            className="w-full px-4 py-3 rounded-lg border border-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        {error && <p className="text-[#db4437] text-sm font-normal ml-3 mt-1">Input field can't be empty!</p> }
    </div>
  )
}
