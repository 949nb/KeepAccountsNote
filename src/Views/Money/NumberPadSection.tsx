import styled from 'styled-components'
import React, { useState } from 'react'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  > .output {
    background: white;
    font-size: 36px;
    text-align: right;
    line-height: 72px;
    padding: 0 16px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.25);
  }

  > .pad {
    > button {
      border-radius: 0;
      font-size: 18px;
      float: left;
      width: 25%;
      border: none;
      height: 64px;

      &.OK {
        float: right;
        height: calc(64px * 2);
      }

      &.zero {
        width: 50%;
      }

      &:nth-child(1) {
        background: #f2f2f2;
      }

      &:nth-child(2), &:nth-child(5) {
        background: #e0e0e0;
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: #d3d3d3;
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: #c1c1c1;
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: #b8b8b8;
      }

      &:nth-child(14) {
        background: #a9a9a9;
      }

      &:nth-child(12) {
        background: cornflowerblue;
      }
    }
  }
`

export const NumberPadSection: React.FC = () => {
    const [output, _setOutput] = useState('0')

    const setOutput = (output: string) => {
        if (output.length > 16) {
            _setOutput(output.slice(0, 16))
        } else {
            _setOutput(output)
        }
    }

    const onClickNumbers = (e: React.MouseEvent<HTMLDivElement>) => {
        const text = (e.target as HTMLButtonElement).textContent
        if (text === null) return
        if (text) {
            switch (text) {
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "6":
                case "7":
                case "5":
                case "8":
                case "9":
                    if (output === '0')
                        setOutput(text)
                    else
                        setOutput(output + text)
                    break;
                case ".":
                    if (output.includes('.')) {
                        break;
                    } else {
                        setOutput(output + '.')
                    }
                    break;
                case '删除':
                    if (output.length === 1)
                        setOutput('0')
                    else
                        setOutput(output.slice(0, -1) || "0")
                    break;
                case '清空':
                    setOutput('0')
                    break;
                case 'OK':
                    console.log(text)
                    break;
            }
        }
    }

    return <Wrapper>
        <div className={ "output" }>
            { output }
        </div>
        <div className={ "pad" } onClick={ (e) => onClickNumbers(e) }>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>删除</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>清空</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button className={ "OK" }>OK</button>
            <button className={ "zero" }>0</button>
            <button>.</button>
        </div>
    </Wrapper>
}