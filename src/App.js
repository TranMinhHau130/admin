import "./App.css";
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Admin from "./page/Admin";
import routes from "./routes";
import Dashboard from "./page/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">dashboard</Link>
          </li>
          <li>
            <Link to="/admin">admin</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/admin" exact>
            <Admin />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
