import styled from 'styled-components'
import { TagsSection } from './TagsSection'
import { NoteSection } from './NoteSection'
import { CategorySection } from './CategorySection'
import { NumberPadSection } from './NumberPadSection'
import { useState } from 'react'
import { TagsItem } from '../Tags/useTags'

const MoneyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Money = () => {
    const [moneyData, setMoneyData] = useState({
        tags: [] as TagsItem[],
        note: '',
        category: '-' as ('-' | '+'),
        amount: 0
    })
    const updateData = (data: Partial<typeof moneyData>) => {
        setMoneyData({...moneyData, ...data})
    }
    return (
        <>
            <MoneyWrapper>
                <TagsSection values={ moneyData.tags } onChange={ (tags) => updateData({tags}) }/>
                <NoteSection value={ moneyData.note } onChange={ (note) => updateData({note}) }/>
                <CategorySection value={ moneyData.category } onChange={ (category => updateData({category})) }/>
                <NumberPadSection value={ moneyData.amount } onChange={ (amount => updateData({amount})) }/>
            </MoneyWrapper>
        </>
    )
}

export default Money
