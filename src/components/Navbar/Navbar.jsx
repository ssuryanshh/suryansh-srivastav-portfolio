import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import './style.scss';

const data = [
  {
    label: 'HOME',
    to: '/',
  },
  {
    label: 'ABOUT',
    to: '/about',
  },
  {
    label: 'SKILLS',
    to: '/skills',
  },
  {
    label: 'EDUCATION',
    to: '/education',
  },
  // {
  //   label: "PROJECTS",
  //   to: "/projects",
  // },
  // {
  //   label: "CONTACT",
  //   to: "/contact",
  // },
];

function Navbar() {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const closeMenu = () => {
    setToggleIcon(false);
  };

  return (
    <div>
      <nav className='navbar'>
        <div className='navbar__container'>
          <Link to={'/'} className='navbar__container__main' onClick={closeMenu}>
            <h2>SURYANSH SRIVASTAV</h2>
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
          {data.map((item, key) => (
            <li key={key} className='navbar__container__menu__item'>
              <Link
                className='navbar__container__menu__item__links'
                to={item.to}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='nav-icon' onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
