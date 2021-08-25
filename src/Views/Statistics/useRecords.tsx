import { useState } from 'react'
import { TagsItem } from '../Tags/useTags'


export type RecordItem = {
    tags: TagsItem[],
    note: string,
    category: "-" | "+",
    amount: number,
    createdAt: string
}
export const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>(JSON.parse(window.localStorage.getItem('records') || "[]"))

    const addRecord: (r: RecordItem) => void = (r) => {
        window.localStorage.setItem('records', JSON.stringify([...records, r]))
        setRecords([...records, r])
    }

    return {records, setRecords, addRecord}
}