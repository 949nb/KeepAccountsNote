import { ReactElement, useState } from 'react'
import { CategorySection } from 'Views/Money/CategorySection'
import { TagsItem } from 'Views/Tags/useTags'
import { RecordItem, useRecords } from './useRecords'
import styled from 'styled-components'


const StatisticsList = styled.ol`
  padding: 16px;
    > li {
      margin: 16px 0;
      font-size: 18px;
    }
`


const Statistics = ({match}: any): ReactElement => {
    const [category, setCategory] = useState<"+" | "-">("-")
    const {records} = useRecords()

    const LiGenerator = (n: RecordItem) =>
        <li key={n.createdAt}>
            类别： { n.tags.map((t: TagsItem) => t.name).join('-') }
            <br />
            备注： { n.note }
            <br/>
            花了我：{ n.amount }
            <hr/>
        </li>

    return <div style={ {background: "white"} }>
        <CategorySection value={ category } onChange={ (c => setCategory(c)) }/>
        <StatisticsList>
            {
                category === '+' ?
                    records.filter(r => r.category === '+').map(
                        LiGenerator
                    ) :
                    records.filter(r => r.category === '-').map(
                        LiGenerator
                    )
            }
        </StatisticsList>
    </div>
}

export default Statistics
