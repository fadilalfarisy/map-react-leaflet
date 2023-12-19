import { hamburger, mosqueIcon } from "../assets/icons";
import { navLinks } from "../constants";
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <header className='padding-x py-2 fixed z-50 w-full bg-white shadow'>
      <nav className='flex justify-between items-center max-container'>
        <Link to='/'>
          <img
            src={mosqueIcon}
            alt='logo'
            width={129}
            height={50}
            className='w-[129px] h-[50px]'
          />
        </Link>
        <ul className='flex-1 flex justify-end items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                className={`font-montserrat leading-normal text-md text-slate-gray ${(navData) => (navData.isActive ? "active" : 'none')}`}
              // className='font-montserrat leading-normal text-md text-slate-gray'
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
        <a href='/'>Sign in</a>
        <span>/</span>
        <a href='/'>Explore now</a>
      </div> */}
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;