import { NavLink } from 'react-router-dom'
import { ListIcon, MoneyIcon, NavWrapper, TagsIcon } from './NavStyle'


const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink exact to="/tags" activeClassName={"selected"}>
                        <TagsIcon/>
                        标签
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName={"selected"}>
                        <MoneyIcon/>
                        记账
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName={"selected"}>
                        <ListIcon/>
                        统计
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav