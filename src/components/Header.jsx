import {NavLink} from 'react-router-dom'
import {ShoppingCart, User} from 'lucide-react';
import logo from '../images/logo.svg';


function Header() {
    return (<div className="max-w-7xl mx-auto w-full py-4 px-2">
        <div className="flex justify-between items-center border-b">
            <div className='flex items-center justify-center gap-10'>
                <div>
                    <a href="#"><img src={logo} className="max-w-15" alt=""/></a>
                </div>
                <div className="flex gap-3 m-2 py-3 px-3 bg-white text-black font-normal text-lg">
                    <NavLink to="/"
                             className={({isActive}) => "pr-3 " + (isActive ? "text-black border-black pb-1" : "text-gray-600 hover:text-black transition-colors")}> Main</NavLink>
                    <NavLink to="/catalog"
                             className={({isActive}) => "pr-3 " + (isActive ? "text-black border-black pb-1" : "text-gray-600 hover:text-black transition-colors")}> Catalog</NavLink>
                    <a href="#" className="pr-3 text-gray-600 hover:text-black transition-colors">Support</a>
                    <a href="#" className="pr-3 text-gray-600 hover:text-black transition-colors">About Us</a>
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

