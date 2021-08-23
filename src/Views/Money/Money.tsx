import styled from 'styled-components'
import { TagsSection } from './TagsSection'
import { NoteSection } from './NoteSection'
import { CategorySection } from './CategorySection'
import { NumberPadSection } from './NumberPadSection'
import { useState } from 'react'

const MoneyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Money = () => {
    const [moneyData, setMoneyData] = useState({
        tags: [] as string[],
        note: '',
        category: '-' as ('-' | '+'),
        amount: 0
    })
    return (
        <>
            { moneyData.tags.join() }
            { moneyData.note }
            <MoneyWrapper>
                <TagsSection values={ moneyData.tags } onChange={ (tags) => setMoneyData({...moneyData, tags}) }/>
                <NoteSection value={ moneyData.note } onChange={ (note) => setMoneyData({...moneyData, note}) }/>
                <CategorySection value={ moneyData.category } onChange={ (category => setMoneyData({...moneyData, category})) }/>
                <NumberPadSection value={ moneyData.amount } onChange={ (amount => setMoneyData({...moneyData, amount})) }/>
            </MoneyWrapper>
        </>
    )
}

export default Money
