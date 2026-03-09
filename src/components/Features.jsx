import {ArrowRight, Clock, Gift, Shield} from 'lucide-react';


function Features() {
    return (
        <div className='layout-container pt-20'>
            <div className='flex flex-col items-center justify-center pb-10'>
                <p className='pb-2 text-xl uppercase tracking-widest text-blue-600'>Why choose us</p>
                <p className='pb-3 text-3xl font-bold'>Shopping made simple</p>
                <p className='text-xl text-gray-500'>We built our store around what matters most to customers.</p>
            </div>
            <div className='flex flex-wrap gap-5 pb-20'>

                <div
                    className='flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 transition-shadow hover:shadow-md'
                    style={{width: 'calc(50% - 10px)'}}>
                    <div className='w-fit rounded-xl bg-indigo-50 p-3 text-indigo-600'>
                        <ArrowRight size={22} strokeWidth={1.5}/>
                    </div>
                    <p className='font-semibold text-gray-900'>Fast Delivery</p>
                    <p className='text-sm leading-relaxed text-gray-500'>We deliver your order within 1–3 business days
                        anywhere in the country.</p>
                </div>

                <div
                    className='flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 transition-shadow hover:shadow-md'
                    style={{width: 'calc(50% - 10px)'}}>
                    <div className='w-fit rounded-xl bg-indigo-50 p-3 text-indigo-600'>
                        <Shield size={22} strokeWidth={1.5}/>
                    </div>
                    <p className='font-semibold text-gray-900'>Secure Payments</p>
                    <p className='text-sm leading-relaxed text-gray-500'>All transactions are protected. We support
                        cards,
                        Apple Pay and Google Pay.</p>
                </div>

                <div
                    className='flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 transition-shadow hover:shadow-md'
                    style={{width: 'calc(50% - 10px)'}}>
                    <div className='w-fit rounded-xl bg-indigo-50 p-3 text-indigo-600'>
                        <Clock size={22} strokeWidth={1.5}/>
                    </div>
                    <p className='font-semibold text-gray-900'>24 / 7 Support</p>
                    <p className='text-sm leading-relaxed text-gray-500'>Our support team is always online and ready to
                        help
                        with any question.</p>
                </div>
                <div
                    className='flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 transition-shadow hover:shadow-md'
                    style={{width: 'calc(50% - 10px)'}}>
                    <div className='w-fit rounded-xl bg-indigo-50 p-3 text-indigo-600'>
                        <Gift size={22} strokeWidth={1.5}/>
                    </div>
                    <p className='font-semibold text-gray-900'>Easy Returns</p>
                    <p className='text-sm leading-relaxed text-gray-500'>Not satisfied? Return any item within 30
                        days — no questions asked.</p>
                </div>
            </div>
        </div>
    )
}

export default Features
