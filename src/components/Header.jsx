import {NavLink} from 'react-router-dom'
import {ShoppingCart, User} from 'lucide-react';
import logo from '../images/logo.svg';


function Header() {
    return (<div className="max-w-7xl mx-auto w-full py-4 pt-4 pb-0 px-6">
        <div className="flex justify-between items-center pb-5">
            <div className='flex items-center justify-center gap-10'>
                <div>
                    <a href="#"><img src={logo} className="max-w-15" alt=""/></a>
                </div>
                <div className="flex items-center gap-1 text-base font-medium">
                    <NavLink to="/"
                             className={({isActive}) => "px-3 py-1.5 rounded-lg " + (isActive ? "text-indigo-600 bg-indigo-50" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors")}>Main</NavLink>
                    <NavLink to="/catalog"
                             className={({isActive}) => "px-3 py-1.5 rounded-lg " + (isActive ? "text-indigo-600 bg-indigo-50" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors")}>Catalog</NavLink>
                    <a href="#"
                       className="px-3 py-1.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors">Support</a>
                    <a href="#"
                       className="px-3 py-1.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors">About
                        Us</a>
                </div>
            </div>

            <div className='flex gap-5'>
                <a href="#"><ShoppingCart/></a>
                <a href="#"> <User/></a>
            </div>
        </div>
    </div>)
}

export default Header

