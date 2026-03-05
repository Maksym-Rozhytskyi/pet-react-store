function Hero() {
    return (
        <div className='bg-linear-to-b from-indigo-50 to-white'>
            <div className='max-w-7xl mx-auto w-full pt-20 pb-24 px-4'>
                <div className='flex flex-col w-1/2'>
                    <p className='text-6xl font-bold pb-6 max-w-lg'>Products you can
                        <span
                            className='text-blue-500'> truly trust
            </span>
                    </p>
                    <p className='text-lg text-gray-500 max-w-lg font-normal mb-10'>A wide range of verified products
                        — from electronics to clothing. Fast delivery, fair prices, and effortless shopping in <br></br> <span
                            className='text-indigo-500 font-bold'> one place.</span></p>
                    <div className='flex flex-row gap-2 items-center pb-10'>
                        <a href=''
                           className='text-white bg-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors'>Browse
                            Catalog</a>
                        <a href='' className='text-gray-500 px-6 py-3'>Learn More →</a>
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
       )
}

export default Hero
