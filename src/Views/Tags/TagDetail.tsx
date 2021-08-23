import { Link, useParams } from "react-router-dom"
import useTags from './useTags'

type Params = {
    tagId: string
}
// TODO 要把TagDetail做成弹框
const TagDetail = () => {
    const {findTag} = useTags()
    const {tagId} = useParams<Params>()
    let tag = findTag(parseInt(tagId))
    return (
        <div>
            <h1>TagDetail...</h1>
            <h2>{ tag.name }</h2>
            <Link to={ '/tags' }>
                <button>Back To TagsList...</button>
            </Link>
        </div>
    )
}

export default TagDetail