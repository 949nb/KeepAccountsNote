import styled from 'styled-components'

const TagsSection = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;

  > ol {
    margin: 0 -10px;

    > li {
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 10px;
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
const TagList = styled.ol`
`

const NotesSection = styled.section`
  background: #f5f5f5;
  padding: 0px 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
      white-space: pre-wrap;
      :focus {
        outline: none;
      }
    }
  }
`
const CategorySection = styled.section` `
const NumberPadSection = styled.section` `
const Money = () => (
    <div>
        <TagsSection>
            <ol>
                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>
            </ol>
            <button>新增标签</button>
        </TagsSection>
        <NotesSection>
            <label>
                <span>备注：</span>
                <input placeholder={"在这里添加备注~"} type="text"/>
            </label>
        </NotesSection>
        <CategorySection>
            <div>
                100
            </div>
            <div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>OK</button>
                <button>0</button>
                <button>.</button>
            </div>
        </CategorySection>
        <NumberPadSection>
            NumberPad
        </NumberPadSection>
    </div>
)

export default Money
