import { Link } from 'react-router-dom'
import { ListIcon, MoneyIcon, NavWrapper, TagsIcon } from './NavStyle'


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