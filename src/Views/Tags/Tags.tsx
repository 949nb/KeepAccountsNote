import useTags from 'Views/Tags/useTags'
import styled from 'styled-components'
import { ReactComponent as RightIcon } from 'icons/right.svg'
import { Link, Route, match as Match, Switch } from 'react-router-dom'
import React from 'react'
import TagDetail from './TagDetail'
import { Button } from '../../components/Button'
import { CenterBox } from '../../style/AppStyle'

const TagsWrapper = styled.ol`
  font-size: 16px;
  li {
    line-height: 50px;
    background: white;
    padding: 0 20px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`

const RightSvg = styled(RightIcon)`height: 1em;
  width: 1em;`

type TagsParamsProps = {
    match?: Match
}
const Tags: React.FC<TagsParamsProps> = ({match}) => {
    const {tags, setTags} = useTags()
    return (
        <>
            <Switch>
                <Route path={ match?.url + '/:tagId' } component={ TagDetail } />
                <Route>
                    <TagsWrapper>
                        { tags.map(tag =>
                            <Link key={ tag.id } to={match?.url + `/${tag.id}` }>
                                <li>
                                    <span>{ tag.name }</span>
                                    <RightSvg/>
                                </li>
                            </Link>
                        ) }
                    </TagsWrapper>
                    <CenterBox>
                        <Button>新建标签</Button>
                    </CenterBox>
                </Route>
            </Switch>
        </>
    )
}

export default Tags