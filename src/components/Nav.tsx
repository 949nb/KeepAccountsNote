import { Link } from 'react-router-dom'
import { ListIcon, MoneyIcon, NavWrapper, TagsIcon } from './NavStyle'


const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/tags">
                        <TagsIcon fill={ 'red' }/>
                        标签
                    </Link>
                </li>
                <li>
                    <Link to="/money">
                        <MoneyIcon fill={ 'red' }/>
                        记账
                    </Link>
                </li>
                <li>
                    <Link to="/statistics">
                        <ListIcon fill={ 'red' }/>
                        统计
                    </Link>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav