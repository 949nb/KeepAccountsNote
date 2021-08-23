import { useState } from 'react'
import { CreateId } from 'lib/createId'

export type TagsItem = {
    id: number,
    name: string
}
const useTags = (() => {
    const [tags, setTags] = useState<TagsItem[]>([
        { id: CreateId(), name: '衣' },
        { id: CreateId(), name: '食' },
        { id: CreateId(), name: '住' },
        { id: CreateId(), name: '行' }
    ])
    // 在CustomHook中不能返回数组？
    return {tags, setTags}
})

export default useTags