import { useState } from 'react'
import { CreateId } from 'lib/createId'

export type TagsItem = {
    id: number,
    name: string
}
let TagsData = [
    {id: CreateId(), name: '衣'},
    {id: CreateId(), name: '食'},
    {id: CreateId(), name: '住'},
    {id: CreateId(), name: '行'}
]
const useTags = (() => {
    const [tags, setTags] = useState<TagsItem[]>(TagsData)
    const findTag: (id: number) => TagsItem = id => tags.filter(tag => tag.id === id)[0]
    const updateTag = (id: number, name: string) => { setTags(tags.map(t => t.id === id ? {id, name} : t)) }
    return {tags, setTags, findTag, updateTag}
})


export default useTags