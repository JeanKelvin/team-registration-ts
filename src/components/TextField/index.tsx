import { useState } from 'react'
import './TextField.css'

interface TextFieldProps {
    updated: (valor: string) => void
    placeholder: string
    label: string
    value: string
    required?: boolean
    type?: 'text' | 'password' | 'date' | 'email' | 'number'
}

const TextField = ({updated, placeholder, label, value, required = false, type = 'text'}: TextFieldProps) => {

    const typed = (evento: React.ChangeEvent<HTMLInputElement>) => {
        updated(evento.target.value)
    }

    return (
        <div className="text-field">
            <label>{label}</label> 
            <input value={value} 
                   onChange={typed} 
                   required={required} 
                   placeholder={placeholder}
                   type={type}/> 
        </div>
    )
}

export default TextField