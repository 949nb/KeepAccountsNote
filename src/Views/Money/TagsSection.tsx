import styled from 'styled-components'
import React from 'react'
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

    const onToggle = (tag: TagsItem) => {
        selectedTags.find(t => t.id === tag.id) ?
            setSelectedTags(selectedTags.filter(t => t.id !== tag.id)) :
            setSelectedTags([...selectedTags, tag])
    }

    return (
        <Wrapper>
            <ol>
                { tags.map(tag =>
                    <li key={ tag.id }
                        onClick={ () => onToggle(tag) }
                        className={ selectedTags.find(t => t.id === tag.id) ? 'selected' : '' }
                    >
                        { tag.name }
                    </li>
                ) }
            </ol>
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    )
}
