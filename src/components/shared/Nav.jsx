import React, { useContext } from 'react';
import { ReactComponent as Adjust } from '../../assets/icons/adjust.svg';
import * as AiIcons from 'react-icons/ai';
import { FiInbox } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../contexts/GlobalState';

function Nav() {
  const { selectedView } = useContext(GlobalContext);

  const Links = [
    {
      path: `/${selectedView}`,
      icon: <AiIcons.AiOutlineUnorderedList />
    },
    {
      path: '/inbox',
      icon: <FiInbox />
    },
    { path: '/', icon: <AiIcons.AiOutlineStar /> }
  ];

  return (
    <nav className="nav container flex">
      <ul className="left flex">
        {Links.map((link, index) => (
          <li key={index}>
            <NavLink exact to={link.path} className="icon flex center" activeClassName=" selected">
              {link.icon}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="right flex">
        <li>
          <NavLink exact to="/adjust" className="icon flex center" activeClassName=" selected">
            <Adjust />
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/search" className="icon flex center" activeClassName=" selected">
            <AiIcons.AiOutlineSearch />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
