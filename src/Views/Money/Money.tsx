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
        <CategorySection />
        <NumberPadSection />
    </MoneyWrapper>
)

export default Money
