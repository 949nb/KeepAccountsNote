import styled from 'styled-components'
import React, { ChangeEventHandler } from 'react'
import { Input } from '../../components/Input'

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;

  > label {
    display: flex;
    align-items: center;

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

      :focus {
        outline: none;
      }
      
    }
    
  }
`

type Props = {
    value: string,
    onChange: (note: string) => void
}

export const NoteSection: React.FC<Props> = ({value:note, onChange: setNote}) => {
    const InputOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
            setNote(e.target.value)
    }
    return (
        <Wrapper>
            <Input label={'备注: '} placeholder={'在这里添加备注哦～'} value={note} onChange={InputOnChange} />
        </Wrapper>
    )
}