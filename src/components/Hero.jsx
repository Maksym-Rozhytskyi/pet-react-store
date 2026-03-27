import { NavLink } from 'react-router-dom';

function Hero() {
  return (
    <div className='bg-linear-to-b from-indigo-50 to-white'>
      <div className='layout-container pt-20 pb-24'>
        <div className='flex w-1/2 flex-col'>
          <p className='max-w-lg pb-6 text-6xl font-bold'>
            Products you can
            <span className='text-blue-500'> truly trust</span>
          </p>
          <p className='mb-10 max-w-lg text-lg font-normal text-gray-500'>
            A wide range of verified products — from electronics to clothing.
            Fast delivery, fair prices, and effortless shopping in <br></br>{' '}
            <span className='font-bold text-indigo-500'> one place.</span>
          </p>
          <div className='flex items-center gap-2 pb-10'>
            <NavLink
              to='/catalog'
              className='rounded-xl bg-indigo-600 px-6 py-3 text-white transition-colors hover:bg-indigo-700'
            >
              Browse Catalog
            </NavLink>
            <NavLink to='/AboutUs' className='px-6 py-3 text-gray-500'>
              Learn More →
            </NavLink>
          </div>
          <div className='flex gap-10'>
            <div>
              <p className='text-2xl font-bold'>100+</p>
              <p className='text-gray-500'>products in catalog</p>
            </div>
            <div>
              <p className='text-2xl font-bold'>12,000+</p>
              <p className='text-gray-500'>happy customers</p>
            </div>
            <div>
              <p className='text-2xl font-bold'>24/7</p>
              <p className='text-gray-500'>online support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
