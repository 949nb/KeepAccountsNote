import { Link, useParams } from "react-router-dom"
import useTags from './useTags'
import { Button } from 'components/Button'
import styled from 'styled-components'
import { Input } from 'components/Input'
import { CenterBox } from 'style/AppStyle'
import { useHistory } from 'react-router-dom'
import React from 'react'

const TagDetailWrapper = styled.div`
  padding: 16px;
`

export const TopBar = styled.header`
  font-size: 48px;
  color: #3D4757;
  padding: 1rem;

  > div, a {
    font-size: 30px;
    height: 100%;
    flex: 1;
    align-self: center;
    padding-right: 10px;
  }

  > h2 {
    flex: 2;
  }
`

type Params = {
    tagId: string
}
const TagDetail: React.FC = () => {
    const {findTag, updateTag, deleteTag} = useTags()
    const {tagId} = useParams<Params>()
    let tag = findTag(parseInt(tagId))
    let history = useHistory()
    if (!tag) {
        history.push('/');
    }
    return (
        <div>
            <TopBar>
                <Link to={ '/tags' }>
                    { '<' }
                </Link>
                <span>标签详情</span>
            </TopBar>
            <TagDetailWrapper>
                <h2>{ tag.name }</h2>
                <Input label={ '标签名：' }
                       type={ "text" }
                       placeholder={ '请输入标签名' }
                       value={ tag.name }
                       onChange={ e => {
                           updateTag(tag.id, e.target.value);
                       } }
                />
                <CenterBox>
                    <Button style={ {background: 'indianred'} } onClick={ () => {
                        deleteTag(tag.id);
                        history.push('/')
                    } }>删除标签</Button>
                </CenterBox>
            </TagDetailWrapper>
        </div>
    )
}

export default TagDetail