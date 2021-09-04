import styled from 'styled-components'


export let Wrapper = styled.div`
  height: 100vh;
  background-color: #F2F2F7;
  box-shadow: 0 2px 8px rgb(84 70 35 / 15%), 0 1px 3px rgb(84 70 35 / 15%);
  display: flex;
  flex-direction: column;
  color: #333;

  @media screen and (min-width: 500px) {
    width: 400px;
    margin: 0 auto;
  }
`
export let Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`

export const CenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
