import Home from "./components/Pages/Home/Home";

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
    name: "Contacts",
    path: "/contacts",
    exact: true,
    component: <Contacts />,
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
