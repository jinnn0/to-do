import React, { useContext } from 'react';
import { NavContainer, NavList } from './style';
import { NavLink } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import { GlobalContext } from '../../../contexts/GlobalState';

function Nav() { 
  const { selectedView } = useContext(GlobalContext);

  const Links = [ 
    { path: '/', icon: <AiIcons.AiOutlineStar /> },
    {
      path: `/${selectedView}`,
      icon: <AiIcons.AiOutlineUnorderedList />
    }
  ];

  return (
    <NavContainer>
      <NavList>
        {Links.map((link) => (
          <li key={link.path}>
            <NavLink exact to={link.path} activeClassName=" selected">
              {link.icon}
            </NavLink>
          </li>
        ))}
      </NavList>
    </NavContainer>
  );
}

export default Nav;
