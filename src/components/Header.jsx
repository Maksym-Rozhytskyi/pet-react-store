import { NavLink } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import logo from '../images/logo.svg';

function Header() {
  return (
    <div className='layout-container pt-4 pb-0'>
      <div className='flex items-center justify-between pb-5'>
        <div className='flex items-center gap-10'>
          <div>
            <NavLink to='/'>
              <img src={logo} className='max-w-15' alt='' />
            </NavLink>
          </div>
          <div className='flex items-center gap-1 text-base font-medium'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                'rounded-lg px-3 py-1.5 ' +
                (isActive
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900')
              }
            >
              Main
            </NavLink>
            <NavLink
              to='/catalog'
              className={({ isActive }) =>
                'rounded-lg px-3 py-1.5 ' +
                (isActive
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900')
              }
            >
              Catalog
            </NavLink>
            <NavLink
              to='/support'
              className={({ isActive }) =>
                'rounded-lg px-3 py-1.5 ' +
                (isActive
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900')
              }
            >
              Support
            </NavLink>
            <NavLink
              to='/aboutUs'
              className={({ isActive }) =>
                'rounded-lg px-3 py-1.5 ' +
                (isActive
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900')
              }
            >
              About Us
            </NavLink>
          </div>
        </div>

        <div className='flex items-center gap-5'>
          <div className='relative'>
            <a href='#' aria-label='Cart'>
              <ShoppingCart />
            </a>
            <p className='absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white'>
              3
            </p>
          </div>
          <a href='#'>
            {' '}
            <User />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
