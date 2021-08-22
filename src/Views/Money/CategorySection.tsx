import styled from 'styled-components'

export const CategorySection = styled.section`
  font-size: 24px;

  > ul {
    display: flex;
    justify-content: space-between;
    background: #c4c4c4;

    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;

      &.selected::after {
        content: '';
        display: block;
        position: absolute;
        background: #333333;
        height: 3px;
        width: 100%;
        bottom: 0;
      }
    }
  }
`