import React from "react";
import { useLocation } from "react-router-dom";
import { Button, Navbar, NavbarBrand, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import { useAppContext } from "../../utils/globalStates/stateProvider";
const Navigation = (props) => {
  const { pathname } = useLocation();
  const [state] = useAppContext();
  return (
    <Navbar
      className="border-bottom border-dark d-flex "
      color="light"
      expand="md"
    >
      <NavbarBrand tag={Link} to={"/"}>
        Y.A.B.A
      </NavbarBrand>
      {/*Check if there is user info in state*/}
      {!("user" in state) ? (
        <div className="ml-auto ">
          {Object.keys(notLoggedIn).map((key) => {
            const btn = notLoggedIn[key];
            return button(btn, pathname);
          })}
        </div>
      ) : (
        <div className="m-auto">
          {Object.keys(loggedIn).map((key) => {
            const btn = loggedIn[key];
            return button(btn, pathname);
          })}
        </div>
      )}
    </Navbar>
  );
};

function button(
  { pages = {}, path = "/", color = "", display = "Button", classes = "", id },
  currentPath
) {
  if (currentPath in pages) {
    return (
      <NavItem key={id} tag={Link} to={path}>
        <Button color={color} className={classes}>
          {display}
        </Button>
      </NavItem>
    );
  } else {
    return null;
  }
}

const notLoggedIn = {
  home: {
    id: 1,
    pages: { "/signup": true, "/login": true },
    path: "/",
    color: "info",
    display: "Home",
    classes: "mr-5",
  },
  login: {
    id: 2,
    pages: { "/signup": true, "/": true },
    path: "/login",
    color: "info",
    display: "Log In",
    classes: "mr-5",
  },
  signup: {
    id: 3,
    pages: { "/": true, "/login": true },
    path: "/register",
    color: "info",
    display: "Sign Up",
    classes: "mr-5",
  },
};

const loggedIn = {
  overview: {
    id: 1,
    pages: { "/expense": true, "/budget": true },
    path: "/overview",
    color: "success",
    display: "Overview",
    classes: "ml-5",
  },
  expense: {
    id: 2,
    pages: { "/overview": true, "/budget": true },
    path: "/expense",
    color: "success",
    display: "Expenses",
    classes: "ml-5",
  },
  budget: {
    id: 3,
    pages: { "/overview": true, "/expense": true },
    path: "/budget",
    color: "success",
    display: "Budget",
    classes: "ml-5",
  },
  logout: {
    id: 4,
    pages: { "/overview": true, "/expense": true, "/budget": true },
    path: "/logout",
    color: "danger",
    display: "Log Out",
    classes: "ml-5",
  },
};
export default Navigation;
