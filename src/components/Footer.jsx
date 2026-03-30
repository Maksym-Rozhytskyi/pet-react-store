import logo from '../images/logo.svg';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className='layout-container pt-10 pb-5'>
      <div className='mb-5 flex justify-between'>
        <div className='flex flex-col items-start'>
          <a href='#'>
            <img src={logo} className='max-w-15 pb-5' alt='' />
          </a>
          <p className='text-gray-500'>
            Your go-to store for quality products at fair prices.
          </p>
          <p className='text-gray-500'>Fast delivery, easy returns.</p>
        </div>
        <div className='flex flex-col items-start'>
          <p className='mb-3 font-semibold'>Shop</p>
          <NavLink to='/catalog' className='text-gray-400'>
            Catalog
          </NavLink>
          <NavLink to='/aboutUs' className='text-gray-400'>
            About us
          </NavLink>
          <NavLink to='/support' className='text-gray-400'>
            Support
          </NavLink>
        </div>
      </div>
      <div className='flex flex-col items-center border-t border-gray-200'>
        <p className='mt-2 text-sm text-gray-500'>
          © 2026 Shop. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
