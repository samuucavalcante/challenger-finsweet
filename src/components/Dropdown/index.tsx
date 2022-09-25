import { useField } from '@unform/core'
import React, { SelectHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react'
import { Container } from './styles'

export type Option = {
  id: number
  label: string
  image?: string
}

type SelectProps = {
  options?: Option[]
  name: string
  loading?: boolean
}

type DropDownProps = SelectHTMLAttributes<HTMLSelectElement> & SelectProps

export const Dropdown: React.FC<DropDownProps> = ({ options = [], name, loading, ...rest }) => {
  const selectRef = useRef<HTMLInputElement>(null)
  const { registerField, fieldName, defaultValue } = useField(name)
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<Option | undefined>()

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue(ref) {
        return selected?.id || 0
      }
    })

  }, [])

  const optionsOrderByPhone = options.sort((a, b) => a.id - b.id).reduce((acc, item) => {
    const country = acc.find(country => country.id === item.id)

    if (country) return acc

    acc.push(item)

    return acc
  }, [] as Option[])

  const onClick = useCallback((option: Option) => {
    setSelected(option)
    setOpen(state => !state)
  }, [])

  return (
    <Container>
      <div className="select-menu">
        <div onClick={() => setOpen(state => !state)} className="select-btn">
          {selected?.id ? (
            <>
              <img src={selected?.image} alt={selected?.label} />
              <span className="sBtn-text">
                +{selected?.id}
              </span>
            </>
          ) : (
            <span className="sBtn-text">
              Select
            </span>

          )}
          <svg style={{ transform: open ? 'rotate(-180deg)' : 'initial', transition: 'all 0.2s ' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>

        <ul onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} className='options' style={{ display: open ? 'none' : 'block', transition: 'all 0.4s' }}>
          {optionsOrderByPhone?.map((option, i) => (
            <>
              {option?.id ? (
                <li className='option' onClick={() => onClick(option)} key={option.label} >
                  <img src={option.image} alt="" />
                  <span className='sBtn-text'>{option.label}</span>
                </li>
              ) : null}
            </>
          ))}
        </ul>
      </div>
    </Container >
  )
}
