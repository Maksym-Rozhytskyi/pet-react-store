import logo from '../images/logo.svg';

function Footer() {
    return (<div className='layout-container pt-10 pb-5'>
        <div className='mb-5 flex justify-between'>
            <div className='flex flex-col items-start'>
                <a href='#'><img src={logo} className='max-w-15 pb-5' alt=''/></a>
                <p className='text-gray-500'>Your go-to store for quality products at fair prices.</p>
                <p className='text-gray-500'>Fast delivery, easy returns.</p>
            </div>
            <div>
                <p className='mb-3 font-semibold'>Shop</p>
                <ul>
                    <li className='text-gray-400'>Catalog</li>
                    <li className='text-gray-400'>About us</li>
                    <li className='text-gray-400'>Support</li>
                </ul>
            </div>
        </div>
        <div className='flex flex-col items-center border-t border-gray-200'>
            <p className='mt-2 text-sm text-gray-500'>© 2026 Shop. All rights reserved.</p>
        </div>
    </div>)
}

export default Footer
