import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Adjust } from '../../assets/icons/adjust.svg';
import * as AiIcons from 'react-icons/ai';
import { FiInbox } from 'react-icons/fi';
import { GlobalContext } from '../../contexts/GlobalState';

function Nav() {
  const { selectedView } = useContext(GlobalContext);

  const Links = [
    { path: '/', icon: <AiIcons.AiOutlineStar /> },
    {
      path: `/${selectedView}`,
      icon: <AiIcons.AiOutlineUnorderedList />
    }
    // {
    //   path: '/inbox',
    //   icon: <FiInbox />
    // }
  ];

  return (
    <nav className="nav container flex">
      <ul className="left flex">
        {Links.map((link) => (
          <li key={link.path}>
            <NavLink exact to={link.path} className="icon flex center" activeClassName=" selected">
              {link.icon}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="right flex">
        <li>
          <div className="icon flex center">
            <AiIcons.AiOutlineSearch />
          </div>
        </li>
        <li>
          <div className="icon flex center">
            <Adjust />
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
