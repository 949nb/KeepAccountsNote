import { useState } from 'react'

const useTags = (() => {
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行'])
    // 在CustomHook中不能返回数组？
    return {tags, setTags}
})

export default useTags