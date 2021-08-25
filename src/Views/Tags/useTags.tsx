import { useState } from 'react'
import { CreateId } from 'lib/createId'

export type TagsItem = {
    id: number,
    name: string
}

const useTags = (() => {
    let setLocalStorage = (key: string, value: any) => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    const [tags, setTags] = useState<TagsItem[]>(JSON.parse(window.localStorage.getItem('tags') || '[]'))
    const findTag: (id: number) => TagsItem = id => tags.filter(tag => tag.id === id)[0] || 0

    const updateTag = (id: number, name: string) => {
        setTags(tags.map(t => t.id === id ? {id, name} : t))
        setLocalStorage('tags', [...tags.map(t => t.id === id ? {id, name} : t)])
    }
    const deleteTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id))
        setLocalStorage('tags', tags.filter(tag => tag.id !== id))
    }
    const addTags = () => {
        let name = window.prompt('请输入新增的标签名～')
        if (name !== null && name !== '') {
            setTags([...tags, {id: CreateId(), name}])
            setLocalStorage('tags', [...tags, {id: CreateId(), name}])
        }
    }

    return {tags, setTags, findTag, updateTag, deleteTag, addTag: addTags}
})


export default useTags