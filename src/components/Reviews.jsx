import {Star} from 'lucide-react';

function Reviews() {
    return (<div className='bg-blue-50'>
            <div className='max-w-7xl mx-auto w-full pb-15 pt-15 px-4'>
                <div className='flex flex-col items-center justify-center pb-15'>
                    <p className="text-blue-600 pb-2 text-xl tracking-widest uppercase">Testimonials</p>
                    <p className="text-3xl font-bold pb-3">What our customers say</p>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='mr-10 bg-white pl-5 pr-5 rounded-3xl'>
                        <div className="flex mb-5 mt-5 text-blue-500">
                            <Star/>
                            <Star/>
                            <Star/>
                            <Star/>
                            <Star/>
                        </div>

                        <p className="text-gray-500 leading-relaxed pb-4">"Amazing experience. Got my order in two days
                            and the quality was even better than
                            expected."</p>
                        <div className='flex gap-5 items-center pb-4'>
                            <div>
                                <p className='rounded-full bg-blue-100 px-4 py-1 text-2xl text-blue-800'>s</p>
                            </div>
                            <div>
                                <p className='font-semibold'>Sarah K.</p>
                                <p className='text-sm text-gray-500'>Regular customer</p>
                            </div>
                        </div>
                    </div>
                    <div className='mr-10 bg-white pl-5 pr-5 rounded-3xl'>
                        <div className="flex mb-5 mt-5 text-blue-500">
                            <Star/>
                            <Star/>
                            <Star/>
                            <Star/>
                            <Star/>
                        </div>

                        <p className="text-gray-500 leading-relaxed pb-4">"Super easy to navigate, checkout was smooth and
                            support helped me pick the right size."</p>
                        <div className='flex gap-5 items-center pb-4'>
                            <div>
                                <p className='rounded-full bg-blue-100 px-4 py-1 text-2xl text-blue-800'>J</p>
                            </div>
                            <div>
                                <p className='font-semibold'>James R.</p>
                                <p className='text-sm text-gray-500'>First-time buyer</p>
                            </div>
                        </div>
                    </div>
                    <div className='mr-10 bg-white pl-5 pr-5 rounded-3xl'>
                        <div className="flex mb-5 mt-5 text-blue-500">
                            <Star/>
                            <Star/>
                            <Star/>
                            <Star/>
                        </div>

                        <p className="text-gray-500 leading-relaxed pb-4">"Great prices and a huge catalog. Will definitely
                            be coming back for more."</p>
                        <div className='flex gap-5 items-center pb-4'>
                            <div>
                                <p className='rounded-full bg-blue-100 px-4 py-1 text-2xl text-blue-800'>E</p>
                            </div>
                            <div>
                                <p className='font-semibold'>Emily T.</p>
                                <p className='text-sm text-gray-500'>Verified buyer</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default Reviews
