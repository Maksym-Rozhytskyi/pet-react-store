import Header from "../components/Header.jsx";
import {Link} from "react-router-dom";

function NotFound() {


    return (<div>
        <Header/>
        <div className="max-w-7xl mx-auto w-full py-4 px-2">
            <div className='flex flex-col justify-center items-center h-screen'>
                <p className='font-bold text-9xl pb-6'>404</p>
                <Link to="/">To the Main Page</Link>
            </div>
        </div>

    </div>)
}

export default NotFound