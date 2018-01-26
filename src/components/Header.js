import React from 'react';
import { NavLink } from 'react-router-dom';
const active = (match, location) => {
  return match.search === location;
};

const Header = () => {
  return (
    <header className="nav">
      <ul>
        <li>
          <NavLink
            to="/"
            activeStyle={{
              fontWeight: 'bold',
              border: '0.08em solid sandybrown',
              borderBottom: '0',
              borderTopLeftRadius: '0.2em'
            }}
            isActive={(match, location) => active(location, '')}
          >
            全部
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{ pathname: '/', search: '?tab=good' }}
            activeStyle={{
              fontWeight: 'bold',
              border: '0.08em solid sandybrown',
              borderBottom: '0'
            }}
            isActive={(match, location) => active(location, '?tab=good')}
          >
            精华
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{ pathname: '/', search: '?tab=share' }}
            activeStyle={{
              fontWeight: 'bold',
              border: '0.08em solid sandybrown',
              borderBottom: '0'
            }}
            isActive={(match, location) => active(location, '?tab=share')}
          >
            分享
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{ pathname: '/', search: '?tab=ask' }}
            activeStyle={{
              fontWeight: 'bold',
              border: '0.08em solid sandybrown',
              borderBottom: '0'
            }}
            isActive={(match, location) => active(location, '?tab=ask')}
          >
            问答
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{ pathname: '/', search: '?tab=job' }}
            activeStyle={{
              fontWeight: 'bold',
              border: '0.08em solid sandybrown',
              borderBottom: '0'
            }}
            isActive={(match, location) => active(location, '?tab=job')}
          >
            招聘
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{ pathname: '/', search: '?tab=dev' }}
            activeStyle={{
              fontWeight: 'bold',
              border: '0.08em solid sandybrown',
              borderBottom: '0'
            }}
            isActive={(match, location) => active(location, '?tab=dev')}
          >
            测试区
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default Header;