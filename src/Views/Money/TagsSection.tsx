import styled from 'styled-components'
import React, { useEffect } from 'react'
import useTags, { TagsItem } from 'Views/Tags/useTags'

const Wrapper = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > ol {
    margin: 0 -10px;

    > li {
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 17px;
      font-size: 14px;
      margin: 8px 10px;

      &.selected {
        background: cornflowerblue;
        color: whitesmoke;
      }
    }
  }

  > button {
    margin-top: 5px;
    background: none;
    border: none;
    border-bottom: 1px solid #333;
    padding: 2px 4px;
    color: #666;
  }
  
`

type Props = {
    values: TagsItem[],
    onChange: (selected: TagsItem[]) => void
}
export const TagsSection: React.FC<Props> = ({values: selectedTags, onChange: setSelectedTags}) => {
    const {tags, addTag} = useTags()

    useEffect(() => {
        selectedTags.length === 0 && tags[0] && setSelectedTags([...selectedTags, tags[0]])
    }, [])

    const onToggle = (tag: TagsItem) => {
        selectedTags.indexOf(tag) > -1 ?
            setSelectedTags(selectedTags.filter(t => t !== tag)) :
            setSelectedTags([...selectedTags, tag])
    }

    return (
        <Wrapper>
            <ol>
                { tags.map(tag =>
                    <li key={ tag.id }
                        onClick={ () => onToggle(tag) }
                        className={ selectedTags.indexOf(tag) > -1 ? 'selected' : '' }
                    >
                        { tag.name }
                    </li>
                ) }
            </ol>
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    )
}
