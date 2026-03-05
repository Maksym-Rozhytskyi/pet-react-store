import {NavLink} from 'react-router-dom'
import {ShoppingCart, User} from 'lucide-react';
import logo from '../images/logo.svg';


function Header() {
    return (<div className='mx-auto w-full max-w-7xl px-6 pt-4 pb-0'>
        <div className='flex items-center justify-between pb-5'>
            <div className='flex items-center gap-10'>
                <div>
                    <a href='#'><img src={logo} className='max-w-15' alt=''/></a>
                </div>
                <div className='flex items-center gap-1 text-base font-medium'>
                    <NavLink to='/'
                             className={({isActive}) => 'rounded-lg px-3 py-1.5 ' + (isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900')}>Main</NavLink>
                    <NavLink to='/catalog'
                             className={({isActive}) => 'rounded-lg px-3 py-1.5 ' + (isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900')}>Catalog</NavLink>
                    <a href='#'
                       className='rounded-lg px-3 py-1.5 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900'>Support</a>
                    <a href='#'
                       className='rounded-lg px-3 py-1.5 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900'>About
                        Us</a>
                </div>
            </div>

            <div className='flex items-center gap-5'>
                <a href='#'><ShoppingCart/></a>
                <a href='#'> <User/></a>
            </div>
        </div>
    </div>)
}

export default Header

