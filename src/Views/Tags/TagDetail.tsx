import { Link } from "react-router-dom"

// TODO 要把TagDetail做成弹框
const TagDetail = () => {
    return (
        <div>
            <h1>TagDetail...</h1>
            <Link to={'/tags'}>
                <button>Back To TagsList...</button>
            </Link>
        </div>
    )
}

export default TagDetail