import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom';

function RouterComponent(props) {
  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/users">
            <Users/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}


function Home(props) {
  return <h1>Home</h1>
}

function About(props) {
  return <h1>About</h1>
}

function Users(props) {
  return <h1>Users</h1>
}


export default RouterComponent