import { AppBar, Toolbar } from "@mui/material";
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createHashRouter,
  Link,
  Navigate,
  RouterProvider,
  useLocation,
  useNavigate,
} from "react-router-dom";

function Links() {
  const navigate = useNavigate();
  return (
    <ul>
      <li>
        <Link to="/page-a">Page A</Link>
      </li>
      <li>
        <Link to="/page-b">Page B</Link>
      </li>
      <li>
        <Link to="/page-c">Page C</Link>
      </li>
      <li>
        <button onClick={() => navigate(-1)}>Back</button>
      </li>
      <li>
        <button onClick={() => navigate(1)}>Forward</button>
      </li>
    </ul>
  );
}

const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to="/page-a" />,
  },
  {
    path: "/page-a",
    element: (
      <>
        <AppBar position="sticky">
          <Toolbar>Page A</Toolbar>
        </AppBar>
        <Links />
      </>
    ),
  },
  {
    path: "/page-b",
    element: (
      <>
        <AppBar position="sticky">
          <Toolbar>Page B</Toolbar>
        </AppBar>
        <Links />
      </>
    ),
  },
  {
    path: "/page-c",
    element: (
      <>
        <AppBar position="sticky">
          <Toolbar>Page C</Toolbar>
        </AppBar>
        <Links />
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
