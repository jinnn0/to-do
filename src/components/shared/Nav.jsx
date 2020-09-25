import React, { useContext } from "react";
import { ReactComponent as List } from "../../assets/icons/list.svg";
import { ReactComponent as Inbox } from "../../assets/icons/inbox.svg";
import { ReactComponent as Star } from "../../assets/icons/star.svg";
import { ReactComponent as Adjust } from "../../assets/icons/adjust.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalState";

function Nav() {
  const { selectedView } = useContext(GlobalContext);

  const Links = [
    {
      path: `/${selectedView}`,
      icon: <List />
    },
    {
      path: "/inbox",
      icon: <Inbox />
    },
    { path: "/", icon: <Star /> }
  ];

  return (
    <nav className="nav container flex">
      <ul className="left flex">
        {Links.map((link, index) => (
          <li key={index}>
            <NavLink
              exact
              to={link.path}
              className="icon flex center"
              activeClassName=" selected"
            >
              {link.icon}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="right flex">
        <li>
          <NavLink
            exact
            to="/adjust"
            className="icon flex center"
            activeClassName=" selected"
          >
            <Adjust />
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/search"
            className="icon flex center"
            activeClassName=" selected"
          >
            <Search />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
