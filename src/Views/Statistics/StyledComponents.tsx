import styled from 'styled-components'

export const StatisticsList = styled.ol`

  > li {
    background: white;
    padding: 16px;
    font-size: 18px;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: calc(100% - 32px);
      bottom: 0;
      height: 1px;
      background: #F0F2F4;
    }
  }
`
export const CountPart = styled.div`
  height: 13vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1rem;
  text-align: end;

  > div {
    text-align: right;
  }

  .count {
    font-size: 48px;
  }

  .title {
    vertical-align: top;
    font-size: 18px;
  }
`

export const LiWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const TagItem = styled.span`
  margin: 0 .3rem 0 0;
  background: #d9d9d9;
  border-radius: 4px;
  display: inline-block;
  padding: 3px 17px;
  font-size: 14px;
  //line-height: 2rem;
`
