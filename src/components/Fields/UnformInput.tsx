import { useField } from '@unform/core'
import React, { InputHTMLAttributes, useEffect, useRef } from 'react'
import { Input } from './styles'

type UnformInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string

}

export const UnformInput: React.FC<UnformInputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })

  }, [])

  return (
    <Input ref={inputRef} {...rest} />
  )
}

export default UnformInput