import React from "react";
import Header from "../../components/Header";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Film from "../Film";
import Cinema from "../Cinema";

export default function Admin({ routes }) {
  const { path, url } = useRouteMatch();
  console.log(path, url);
  return (
    <>
      <Header></Header>
      <h2>Admin</h2>
      <ul>
        <li>
          <Link to={`${url}/film`}>Film</Link>
        </li>
        <li>
          <Link to={`${url}/cinema`}>user</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${path}/film`}>
          <Film></Film>
        </Route>
        <Route exact path={`${path}/cinema`}>
          <Cinema></Cinema>
        </Route>
      </Switch>
    </>
  );
}
