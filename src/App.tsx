import {
    HashRouter as Router,
    Route,
    Link,
    Redirect, Switch
} from 'react-router-dom'
import { ReactElement } from 'react'
import styled from 'styled-components'
import Nav from './components/Nav'

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
                <Nav />
            </Wrapper>
        </Router>
    </>
)

export default App
