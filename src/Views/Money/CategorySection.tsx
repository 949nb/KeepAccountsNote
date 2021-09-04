import styled from 'styled-components'
import React from 'react'

export const Wrapper = styled.section`
  font-size: 48px;
  color: #3D4757;
  padding: 0 1rem;

  > ul {
    display: flex;

    > li {
      width: 35%;
      text-align: center;
      padding: 16px 0;
      position: relative;

      &.selected::after {
        content: '';
        display: block;
        position: absolute;
        background: #3D4757;
        height: 3px;
        width: 100%;
        bottom: 0;
        animation: .25s ease-in bottomMoveOut;
      }
    }
  }

  @keyframes bottomMoveOut {
    0% { width: 0 }
    100% { width: 100% }
  }
`

type Props = {
    value: string,
    onChange: (category: ('-' | '+')) => void
}

export const CategorySection: React.FC<Props> = ({value: category, onChange: setCategory}) => {
    const categoryMap = {"+": "收入", "-": "支出"}
    type Keys = keyof typeof categoryMap
    const categoryList: Keys[] = ["-", "+"]
    return (
        <Wrapper>
            <ul>
                {
                    categoryList.map(c =>
                        <li onClick={ () => setCategory(c) }
                            className={ category === c ? 'selected' : '' }
                            key={ c }
                        >
                            { categoryMap[c] }
                        </li>
                    )
                }
            </ul>
        </Wrapper>
    )
}