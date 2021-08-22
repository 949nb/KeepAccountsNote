import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as ListSvg } from 'icons/list.svg'
import { ReactComponent as MoneySvg } from 'icons/money.svg'
import { ReactComponent as TagsSvg } from 'icons/tags.svg'

let NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      width: 33.3333%;
      text-align: center;
      padding: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`
let svgSize = `height: 1.5em; width: 1.5em; margin-bottom: 5px;`
const TagsIcon = styled(TagsSvg)`${svgSize}`
const MoneyIcon = styled(MoneySvg)`${svgSize}`
const ListIcon = styled(ListSvg)`${svgSize}`

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <TagsIcon fill={ 'red' }/>
                    <Link to="/tags">
                        标签
                    </Link>
                </li>
                <li>
                    <MoneyIcon fill={ 'red' }/>
                    <Link to="/money">
                        记账
                    </Link>
                </li>
                <li>
                    <ListIcon fill={ 'red' }/>
                    <Link to="/statistics">
                        统计
                    </Link>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav