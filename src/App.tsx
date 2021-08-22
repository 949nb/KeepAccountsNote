import {
    HashRouter as Router,
    Route,
    Link,
    Redirect, Switch
} from 'react-router-dom'
import { ReactElement } from 'react'
import styled from 'styled-components'

const Tags = () => (
    <div>
        <h2>标签页面</h2>
    </div>
)

const Money = () => (
    <div>
        <h2>记账页面</h2>
    </div>
)

const Statistics = ({match}: any): ReactElement => {
    return <div>
        <h2>统计页面</h2>
    </div>
}

let NoMatch = () => (
    <h1>404</h1>
)

let Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
let Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`

let Nav = styled.nav`
  border: 1px solid blue;

  > ul {
    display: flex;

    > li {
      width: 33.3333%;
      text-align: center;
      padding: 16px;
    }
  }

`

const App = () => (
    <>
        <Router>
            <Wrapper>
                <Main>
                    <Switch>
                        <Redirect exact from="/" to="/tags"/>
                        <Route path="/tags" component={ Tags }/>
                        <Route path="/money" component={ Money }/>
                        <Route path="/statistics" component={ Statistics }/>
                        <Route path="*" component={ NoMatch }/>
                    </Switch>
                </Main>
                <Nav>
                    <ul>
                        <li><Link to="/tags">标签</Link></li>
                        <li><Link to="/money">记账</Link></li>
                        <li><Link to="/statistics">统计页</Link></li>
                    </ul>
                </Nav>
            </Wrapper>
        </Router>
    </>
)

export default App
