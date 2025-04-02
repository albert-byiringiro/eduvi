import { MouseEventHandler, ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
    variant?: 'primary' | 'secondary' | 'outline'
    loading?: boolean
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
    onClick?: MouseEventHandler<HTMLButtonElement>
    className?: string
}

export default function Button() {
  return (
    <div>Button</div>
  )
}
