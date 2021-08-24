import { Link, useParams } from "react-router-dom"
import useTags from './useTags'
import { Button } from '../../components/Button'
import { CenterBox } from './Tags'
import styled from 'styled-components'
import { Input } from '../../components/Input'

const TagDetailWrapper = styled.div`
    padding: 16px;
`

const TopBar = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  line-height: 20px;
  padding: 14px;
  background: white;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);

  > div, a {
    height: 100%;
    flex: 1;
    align-self: center;
    padding-left: 10px;
  }

  > h2 {
    flex: 2;
  }
`

type Params = {
    tagId: string
}
//TODO 要把TagDetail做成弹框
const TagDetail = () => {
    const {findTag} = useTags()
    const {tagId} = useParams<Params>()
    let tag = findTag(parseInt(tagId))
    return (
        <div>
            <TopBar>
                <Link to={ '/tags' }>
                    {'<'}
                </Link>
                <span>TagDetail</span>
                <div></div>
            </TopBar>
            <TagDetailWrapper>
                <h2>{ tag.name }</h2>

                <Input label={'标签名：'} type={"text"} placeholder={'请输入标签名'}/>

                <CenterBox>
                    <Button style={ {background: 'indianred'} }>删除标签</Button>
                </CenterBox>
            </TagDetailWrapper>
        </div>
    )
}

export default TagDetail