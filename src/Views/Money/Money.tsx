import styled from 'styled-components'
import { TagsSection } from './TagsSection'
import { NoteSection } from './NoteSection'
import { CategorySection } from './CategorySection'
import { NumberPadSection } from './NumberPadSection'

const MoneyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Money = () => (
    <MoneyWrapper>
        <TagsSection />
        <NoteSection />
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
