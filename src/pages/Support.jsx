import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import {useState} from 'react';
import {ChevronDown, ChevronUp} from 'lucide-react';

function Support() {
    const [openItems, setOpenItems] = useState([false, false, false, false, false]);

    const toggleItem = (index) => {
        setOpenItems((prev) => {
            const next = [...prev];
            next[index] = !next[index];
            return next;
        });
    };
    return (<div>
        <Header/>
        <div className='bg-slate-50'>
            <div className='layout-container py-5 '>
                <div className='mb-20'>
                    <p className='pb-2 uppercase tracking-widest text-blue-600'>Support</p>
                    <p className='text-3xl font-bold pb-2'>How can we help?</p>
                    <p className='text-xl text-gray-500'>Browse the FAQ or send us a message — we'll get back to you
                        shortly.</p>
                </div>
                <div className='flex gap-10'>
                    <div className='flex-2'>
                        <p className='text-xl font-bold pb-5'>Frequently asked questions</p>
                        <div className='bg-white mb-2 p-5 rounded-xl border border-gray-400'>
                            <div onClick={() => toggleItem(0)} className='cursor-pointer'>
                                <div className='flex items-center justify-between'>
                                    <p className='font-bold'>How long does delivery take?</p>
                                    {openItems[0] ? <ChevronUp className='h-4 w-4 text-gray-500'/> :
                                        <ChevronDown className='h-4 w-4 text-gray-500'/>}
                                </div>
                                {openItems[0] &&
                                    <p className='text-gray-500 text-sm'>We deliver within 1–3 business days across the
                                        country. Express options may be available at checkout.</p>}
                            </div>
                        </div>
                        <div className='bg-white mb-2 p-5 rounded-xl border border-gray-400'>
                            <div onClick={() => toggleItem(1)} className='cursor-pointer'>
                                <div className='flex items-center justify-between'>
                                    <p className='font-bold'>Can I return a product?</p>
                                    {openItems[1] ? <ChevronUp className='h-4 w-4 text-gray-500'/> :
                                        <ChevronDown className='h-4 w-4 text-gray-500'/>}
                                </div>
                                {openItems[1] &&
                                    <p className='text-gray-500 text-sm'>Yes — you can return any item within 30 days of
                                        purchase, no questions asked. Just contact us and we'll arrange the return.</p>}
                            </div>
                        </div>
                        <div className='bg-white mb-2 p-5 rounded-xl border border-gray-400'>
                            <div onClick={() => toggleItem(2)} className='cursor-pointer'>
                                <div className='flex items-center justify-between'>
                                    <p className='font-bold'>What payment methods do you accept?</p>
                                    {openItems[2] ? <ChevronUp className='h-4 w-4 text-gray-500'/> :
                                        <ChevronDown className='h-4 w-4 text-gray-500'/>}
                                </div>
                                {openItems[2] &&
                                    <p className='text-gray-500 text-sm'>We accept all major credit and debit cards,
                                        Apple Pay, and Google Pay. All transactions
                                        are encrypted and secure.</p>}
                            </div>
                        </div>
                        <div className='bg-white mb-2 p-5 rounded-xl border border-gray-400'>
                            <div onClick={() => toggleItem(3)} className='cursor-pointer'>
                                <div className='flex items-center justify-between'>
                                    <p className='font-bold'>How do I track my order?</p>
                                    {openItems[3] ? <ChevronUp className='h-4 w-4 text-gray-500'/> :
                                        <ChevronDown className='h-4 w-4 text-gray-500'/>}
                                </div>
                                {openItems[3] &&
                                    <p className='text-gray-500 text-sm'>Once your order ships, you'll receive a
                                        tracking
                                        link via email. You can also check your
                                        order status in your account.</p>}
                            </div>
                        </div>
                        <div className='bg-white mb-2 p-5 rounded-xl border border-gray-400'>
                            <div onClick={() => toggleItem(4)} className='cursor-pointer'>
                                <div className='flex items-center justify-between'>
                                    <p className='font-bold'>Do you ship internationally?</p>
                                    {openItems[4] ? <ChevronUp className='h-4 w-4 text-gray-500'/> :
                                        <ChevronDown className='h-4 w-4 text-gray-500'/>}
                                </div>
                                {openItems[4] &&
                                    <p className='text-gray-500 text-sm'>Currently we only ship domestically.
                                        International shipping is something we're working on for the future.</p>}
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <p className='text-xl font-bold pb-5'>Send us a message</p>
                        <div
                            className='mb-5 flex items-center gap-2 rounded-xl border border-gray-400 bg-white px-3 py-2 text-sm'>
                            <input type='text' className='w-full outline-none'
                                   placeholder='Your name'/>
                        </div>
                        <div
                            className='mb-5 flex items-center gap-2 rounded-xl border border-gray-400 bg-white px-3 py-2 text-sm'>
                            <input type='text' className='w-full outline-none'
                                   placeholder='Your email'/>
                        </div>
                        <div
                            className='mb-5 flex items-center gap-2 rounded-xl border border-gray-400 bg-white px-3 py-2 text-sm'>
                            <textarea className='w-full outline-none min-h-24 resize-none' placeholder='Your message...'/>
                        </div>
                        <button className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-colors'>
                            Send message
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>)
}

export default Support
