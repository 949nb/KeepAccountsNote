import styled from 'styled-components'
import { TagsSection } from './TagsSection'
import { NoteSection } from './NoteSection'
import { CategorySection } from './CategorySection'
import { NumberPadSection } from './NumberPadSection'
import React, { useEffect, useState } from 'react'
import useTags, { TagsItem } from '../Tags/useTags'
import { RecordItem, useRecords } from '../Statistics/useRecords'
import { useHistory } from 'react-router-dom'

const MoneyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const CategoryWrapper = styled.div`
  background: #cccccc;
`

let count = 0;
const Money:React.FC = () => {
    const { addRecord } = useRecords()
    const {tags } = useTags()
    const history = useHistory()
    const [moneyData, setMoneyData] = useState<Omit<RecordItem, "createdAt">>({
        tags: [] as TagsItem[],
        note: '',
        category: '-' as ('-' | '+'),
        amount: 0
    })

    useEffect(() => {
        if (moneyData.tags.length === 0 && tags[0] && count === 0) {
            count++
            setMoneyData({...moneyData, tags: [{...tags[0]}]})
        }
    }, [moneyData, tags])

    const updateData = (data: Partial<typeof moneyData>) => {
        setMoneyData({...moneyData, ...data})
    }

    const onOK = () => {
        if (moneyData.note && moneyData.amount>=0 && moneyData.tags.length > 0) {
            console.log('ok')
            addRecord({...moneyData, createdAt: new Date().toLocaleDateString()})
            window.alert('记账成功~')
            history.push('/statistics')
        }
    }
    return (
        <>
            <MoneyWrapper>
                <TagsSection values={ moneyData.tags } onChange={ (tags) => updateData({tags}) }/>
                <NoteSection value={ moneyData.note } onChange={ (note) => updateData({note}) }/>
                <CategoryWrapper>
                    <CategorySection value={ moneyData.category } onChange={ (category => updateData({category})) }/>
                </CategoryWrapper>
                <NumberPadSection value={ moneyData.amount } onOk={onOK} onChange={ (amount => updateData({amount})) }/>
            </MoneyWrapper>
        </>
    )
}

export default Money
