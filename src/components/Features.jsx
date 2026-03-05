import {ArrowRight, Clock, Gift, Shield} from 'lucide-react';


function Features() {
    return (
        <div className='max-w-7xl mx-auto w-full pt-20 pb-24 px-4'>
            <div className='flex flex-col items-center justify-center pb-10'>
                <p className="text-blue-600 pb-2 text-xl tracking-widest uppercase">Why choose us</p>
                <p className="text-3xl font-bold pb-3">Shopping made simple</p>
                <p className="text-gray-500 text-xl">We built our store around what matters most to customers.</p>
            </div>
            <div className="flex flex-wrap gap-5 pb-20">

                <div
                    className="flex flex-col gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-shadow"
                    style={{width: "calc(50% - 10px)"}}>
                    <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 w-fit">
                        <ArrowRight size={22} strokeWidth={1.5}/>
                    </div>
                    <p className="font-semibold text-gray-900">Fast Delivery</p>
                    <p className="text-sm text-gray-500 leading-relaxed">We deliver your order within 1–3 business days
                        anywhere in the country.</p>
                </div>

                <div
                    className="flex flex-col gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-shadow"
                    style={{width: "calc(50% - 10px)"}}>
                    <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 w-fit">
                        <Shield size={22} strokeWidth={1.5}/>
                    </div>
                    <p className="font-semibold text-gray-900">Secure Payments</p>
                    <p className="text-sm text-gray-500 leading-relaxed">All transactions are protected. We support
                        cards,
                        Apple Pay and Google Pay.</p>
                </div>

                <div
                    className="flex flex-col gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-shadow"
                    style={{width: "calc(50% - 10px)"}}>
                    <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 w-fit">
                        <Clock size={22} strokeWidth={1.5}/>
                    </div>
                    <p className="font-semibold text-gray-900">24 / 7 Support</p>
                    <p className="text-sm text-gray-500 leading-relaxed">Our support team is always online and ready to
                        help
                        with any question.</p>
                </div>
                <div
                    className="flex flex-col gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-shadow"
                    style={{width: "calc(50% - 10px)"}}>
                    <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 w-fit">
                        <Gift size={22} strokeWidth={1.5}/>
                    </div>
                    <p className="font-semibold text-gray-900">Easy Returns</p>
                    <p className="text-sm text-gray-500 leading-relaxed">Not satisfied? Return any item within 30
                        days — no questions asked.</p>
                </div>
            </div>
        </div>
    )
}

export default Features
