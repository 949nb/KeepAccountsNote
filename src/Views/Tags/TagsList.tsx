import { Link, match as Match } from 'react-router-dom'
import { CenterBox } from '../../style/AppStyle'
import { Button } from '../../components/Button'
import React from 'react'
import useTags from './useTags'
import styled from 'styled-components'
import { ReactComponent as RightIcon } from '../../icons/right.svg'


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



export type TagsParamsProps = {
    match: Match
}
export const TagsList: React.FC<TagsParamsProps> = ({match}) => {
    const {tags, addTag} = useTags()
    return (
        <>
            <TagsWrapper>
                { tags.map(tag => {
                        return <Link key={ tag.id } to={ match?.url + `/${ tag.id }` }>
                            <li>
                                <span>{ tag.name }</span>
                                <RightSvg/>
                            </li>
                        </Link>
                    }
                ) }
            </TagsWrapper>
            <CenterBox>
                <Button onClick={ addTag }>新建标签</Button>
            </CenterBox>
        </>
    )
}
