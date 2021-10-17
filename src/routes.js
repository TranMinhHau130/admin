import Admin from "./page/Admin";
import Cinema from "./page/Cinema";
import Dashboard from "./page/Dashboard";
import Film from "./page/Film";
import User from "./page/User";

// ----------------------------------------------------------------------

const routes = [
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/admin",
    component: Admin,
    routes: [
      {
        path: "/cinema",
        component: Cinema,
      },
      {
        path: "/film",
        component: Film,
      },
      {
        path: "/user",
        component: User,
      },
    ],
  },
];
export default routes;
