import styled from 'styled-components'
import React, { useRef } from 'react'

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
    const refInput = useRef<HTMLInputElement | null>(null)
    const InputOnBlur = () => {
        if (refInput.current?.value)
            setNote(refInput.current.value)
    }
    return (
        <Wrapper>
            <label>
                <span>备注：</span>
                <input placeholder={ "在这里添加备注~" }
                       ref={refInput}
                       defaultValue={note}
                       onBlur={InputOnBlur}
                       type="text"
                />
            </label>
        </Wrapper>
    )
}