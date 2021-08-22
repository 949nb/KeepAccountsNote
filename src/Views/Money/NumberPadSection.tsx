import styled from 'styled-components'

export const NumberPadSection = styled.section`
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
      font-size: 18px; float: left; width: 25%; border: none; height: 64px;
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
