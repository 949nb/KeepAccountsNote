import React from 'react'
import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

let InputWrapper = styled.label`
  > label {
    display: flex;
    align-items: center;
    font-weight: bold;

    > span {
      margin-right: 16px;
      white-space: nowrap;
    }

    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
      white-space: pre-wrap;
      font-size: inherit;

      :focus {
        outline: none;
      }

    }
  }
`


type Props = {
    label: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<Props> = (props) => {
    const { label, children, ...rest } = props
    return (
        <InputWrapper>
            <label>
                <span>{label}</span>
                <input {...rest} />
            </label>
        </InputWrapper>
    )
}