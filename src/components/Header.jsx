import {NavLink} from 'react-router-dom'
import {ShoppingCart, User} from 'lucide-react';


function Header() {
    return (<div className="max-w-7xl mx-auto w-full py-4 px-2">
        <div className="flex justify-between items-center border-b">
            <div>
                <a href="#" className="text-2xl font-bold">Online-Store</a>
            </div>
            <div className="flex gap-5 m-2 py-3 px-3 bg-white text-black font-bold text-lg divide-x">
                <NavLink to="/"
                         className={({isActive}) => "pr-3 " + (isActive ? "text-black border-black pb-1" : "text-gray-600 hover:text-black transition-colors")}> Main</NavLink>
                <NavLink to="/catalog"
                         className={({isActive}) => "pr-3 " + (isActive ? "text-black border-black pb-1" : "text-gray-600 hover:text-black transition-colors")}> Catalog</NavLink>
                <a href="#" className="pr-3 text-gray-600 hover:text-black transition-colors">Support</a>
                <a href="#" className="pr-3 text-gray-600 hover:text-black transition-colors">About Us</a>
            </div>
            <div className='flex gap-5'>
                <a href="#"><ShoppingCart/></a>
                <a href="#"> <User/></a>
            </div>
        </div>
    </div>)
}

export default Header

