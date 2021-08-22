import {
    HashRouter as Router,
    Route,
    Redirect, Switch
} from 'react-router-dom'
import Nav from './components/Nav'
import Tags from './Views/Tags'
import Money from './Views/Money'
import Statistics from './Views/Statistics'
import NoMatch from './Views/NoMatch'
import { Main, Wrapper } from './style/AppStyle'


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
                        <Route component={ NoMatch }/>
                    </Switch>
                </Main>
                <Nav />
            </Wrapper>
        </Router>
    </>
)

export default App
