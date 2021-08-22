import styled from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'

const Wrapper_TagsSection = styled.section`
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

export const TagsSection: React.FC = props => {
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行'])
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const onAddTag = () => {
        const tagName = window.prompt('新标签的名称为')
        if (tagName !== null) {
            setTags(
                [...tags, tagName]
            )
        }
    }

    useEffect(() => {
        selectedTags.length === 0 && tags[0] && setSelectedTags([...selectedTags, tags[0]])
    }, [])

    const onToggle = (tag: string) => {
        selectedTags.indexOf(tag) > -1 ?
            setSelectedTags(selectedTags.filter(t => t !== tag)) :
            setSelectedTags([...selectedTags, tag])
    }

    return (
        <Wrapper_TagsSection>
            <ol>
                { tags.map(tag =>
                    <li key={ tag }
                        onClick={ () => onToggle(tag) }
                        className={ selectedTags.indexOf(tag) > -1 ? 'selected' : '' }
                    >
                        { tag }
                    </li>
                ) }
            </ol>
            <button onClick={ onAddTag }>新增标签</button>
        </Wrapper_TagsSection>
    )
}
