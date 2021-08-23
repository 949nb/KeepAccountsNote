import styled from 'styled-components'
import { useState } from 'react'

export const Wrapper = styled.section`
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

export const CategorySection = () => {
    // + 表示收入     - 表示支出
    const categoryMap = {"+": "收入", "-": "支出"}
    type Keys = keyof typeof categoryMap
    const categoryList: Keys[] = ["-", "+"]
    const [category, setCategory] = useState('-')
    return (
        <Wrapper>
            <ul>
                {
                    categoryList.map(c =>
                        <li onClick={ () => setCategory(c) }
                            className={ category === c ? 'selected' : '' }
                        >
                            {categoryMap[c]}
                        </li>
                    )
                }
                <li onClick={ () => setCategory('+') }
                    className={ category === '+' ? 'selected' : '' }
                >
                    收入
                </li>
            </ul>
        </Wrapper>
    )
}