import Home from "./components/Pages/Home/Home";
import Contacts from "./components/Pages/Contacts/Contacts";
import About from "./components/Pages/About/About";
import Login from "./components/Pages/Login/Login";
import Team from "./components/Pages/Team/Team";
import Blog from "./components/Pages/Blog/Blog";
import Error from "./components/Pages/Error/Error";
const router = [
  {
    id: Math.random(),
    name: "Home",
    path: "/",
    exact: true,
    component: <Home />,
    fallback: <Home />,
  },
  {
    id: Math.random(),
    name: "About",
    path: "/about",
    exact: true,
    component: <About />,
  },
  {
    id: Math.random(),
    name: "Contacts",
    path: "/contacts",
    exact: true,
    component: <Contacts />,
  },
  {
    id: Math.random(),
    name: "Login",
    path: "/login",
    exact: true,
    component: <Login />,
  },
  {
    id: Math.random(),
    name: "Team",
    path: "/team",
    exact: true,
    component: <Team />,
  },
  {
    id: Math.random(),
    name: "Blog",
    path: "/blog",
    exact: true,
    component: <Blog />,
  },
  {
    id: Math.random(),
    name: "Error",
    path: "*",
    exact: true,
    component: <Error />,
  },
];

export default router;
