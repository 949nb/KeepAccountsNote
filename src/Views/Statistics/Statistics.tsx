import React, { ReactElement, useState } from 'react'
import { CategorySection } from 'Views/Money/CategorySection'
import { useRecords } from './useRecords'
import { StatisticsList } from './StyledComponents'
import { ConsumeComeIn } from './StatisticsList'

const Statistics = (): ReactElement => {
    const [category, setCategory] = useState<"+" | "-">("-")
    const {records} = useRecords()


    return (
        <div>
            <CategorySection value={ category } onChange={ (c => setCategory(c)) }/>
            <StatisticsList>
                {
                    category === '+' ?
                        <ConsumeComeIn records={records} category={'+'}/> :
                        <ConsumeComeIn records={records} category={'-'}/>
                }
            </StatisticsList>
        </div>
    )
}

export default Statistics
