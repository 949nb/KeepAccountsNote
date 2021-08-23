import { useState } from 'react'

export type TagsItem = {
    id: number,
    name: string
}
const useTags = (() => {
    const [tags, setTags] = useState<TagsItem[]>([
        {
            id: 1,
            name: '衣'
        },
        {
            id: 2,
            name: '食'
        },
        {
            id: 3,
            name: '住'
        },
        {
            id: 4,
            name: '行'
        }
    ])
    // 在CustomHook中不能返回数组？
    return {tags, setTags}
})

export default useTags