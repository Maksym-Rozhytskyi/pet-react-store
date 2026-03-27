import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <div className='layout-container flex flex-1 flex-col items-center justify-center py-40'>
        <div className='flex flex-col items-center justify-center'>
          <p className='pb-6 text-8xl font-bold'>404</p>
          <p className='mb-5 text-2xl font-semibold'>Page not found</p>
          <p className='text-gray-500'>Looks like this page doesn't exist.</p>
          <p className='mb-10 text-gray-500'>
            Maybe it was moved or you mistyped the URL.
          </p>
          <Link
            to='/'
            className='rounded-xl bg-blue-600 p-3 font-bold text-white'
          >
            Back to Main
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
