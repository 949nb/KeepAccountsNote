import { ReactElement, useState } from 'react'
import { CategorySection } from '../Money/CategorySection'

const Statistics = ({match}: any): ReactElement => {
    const [category, setCategory] = useState<"+" | "-">("-")
    return <div>
        <CategorySection value={ category } onChange={ (c => setCategory(c)) }/>
    </div>
}

export default Statistics
