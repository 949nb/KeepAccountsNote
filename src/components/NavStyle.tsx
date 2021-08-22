import styled from 'styled-components'
import { ReactComponent as TagsSvg } from '../icons/tags.svg'
import { ReactComponent as MoneySvg } from '../icons/money.svg'
import { ReactComponent as ListSvg } from '../icons/list.svg'

export let NavWrapper = styled.nav`
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
export const TagsIcon = styled(TagsSvg)`${svgSize}`
export const MoneyIcon = styled(MoneySvg)`${svgSize}`
export const ListIcon = styled(ListSvg)`${svgSize}`
