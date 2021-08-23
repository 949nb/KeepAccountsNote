import useTags from 'useTags'
import styled from 'styled-components'
import { ReactComponent as RightIcon } from 'icons/right.svg'

const TagsWrapper = styled.ol`
  font-size: 16px;

  > li {
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

const Button = styled.button`
  font-size: 16px;
  height: 40px;
  width: 96px;
  border-radius: 5px;
  background: cornflowerblue;
  border: none;
  color: whitesmoke;
  margin: 40px 0;
`

const CenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const RightSvg = styled(RightIcon)`height: 1em;
  width: 1em;`

const Tags = () => {
    const {tags, setTags} = useTags()
    return (
        <>
            <TagsWrapper>
                { tags.map(tag =>
                    <li key={ tag }>
                        <span>{ tag }</span>
                        <RightSvg/>
                    </li>
                ) }
            </TagsWrapper>
            <CenterBox>
                <Button>新建标签</Button>
            </CenterBox>
        </>
    )
}

export default Tags