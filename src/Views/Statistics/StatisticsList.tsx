import React from 'react'
import { CountPart, LiWrapper, TagItem } from './StyledComponents'
import { RecordItem } from './useRecords'
import { TagsItem } from '../Tags/useTags'

type ConsumeProps = {
    category: '-' | '+'
    records: RecordItem[]
}

const LiGenerator = (n: RecordItem) =>
    <LiWrapper key={ n.createdAt }>
        <div>
            { n.tags.map((t: TagsItem) => <TagItem>{ t.name }</TagItem>) }
        </div>
        <div>
            ¥ { n.amount }
        </div>
    </LiWrapper>

export const ConsumeComeIn: React.FC<ConsumeProps> = (props) => {

    let {category, records} = props
    return (
        <>
            <CountPart>
                {
                    <div>
                        月消费
                        <span
                            className={ 'count' }> ¥ { records.filter(r => r.category === category).reduce((n, m) => n += m.amount, 0) } </span>
                    </div>
                }
            </CountPart>
            {
                records.filter(r => r.category === category).map(LiGenerator)
            }
        </>
    )
}
