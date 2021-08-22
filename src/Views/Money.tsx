import styled from 'styled-components'
import { TagsSection } from './Money/TagsSection'
import { NotesSection } from './Money/NotesSection'
import { CategorySection } from './Money/CategorySection'
import { NumberPadSection } from './Money/NumberPadSection'

const MoneyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Money = () => (
    <MoneyWrapper>
        <TagsSection>
        </TagsSection>
        <NotesSection>
            <label>
                <span>备注：</span>
                <input placeholder={ "在这里添加备注~" } type="text"/>
            </label>
        </NotesSection>
        <CategorySection>
            <ul>
                <li className={ 'selected' }>支出</li>
                <li>收入</li>
            </ul>
        </CategorySection>
        <NumberPadSection>
            <div className={ "output" }>
                100
            </div>
            <div className={ "pad" }>
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
                <button className={"OK"}>OK</button>
                <button className={"zero"}>0</button>
                <button>.</button>
            </div>
        </NumberPadSection>
    </MoneyWrapper>
)

export default Money
