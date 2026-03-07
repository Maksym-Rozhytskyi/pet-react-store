import Header from '../components/Header.jsx';
import {Link} from 'react-router-dom';

function NotFound() {


    return (<div>
        <Header/>
        <div className='layout-container py-4'>
            <div className='flex h-screen flex-col items-center justify-center'>
                <p className='pb-6 text-9xl font-bold'>404</p>
                <Link to='/'>To the Main Page</Link>
            </div>
        </div>

    </div>)
}

export default NotFound
