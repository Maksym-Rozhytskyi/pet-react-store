import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function Support() {
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
                    <div>
                        <p className='text-xl font-bold pb-5'>Frequently asked questions</p>
                        <div className='bg-white mb-2 p-2 rounded-xl border border-gray-400'>
                            <p>How long does delivery take?</p>
                            <p>We deliver within 1–3 business days across the country. Express options may be available
                                at checkout.</p>
                        </div>
                        <div className='bg-white mb-2 p-2 rounded-xl border border-gray-400'>
                            <p>Can I return a product?</p>
                            <p>Yes — you can return any item within 30 days of purchase, no questions asked. Just
                                contact us and we'll arrange the return.</p>
                        </div>
                        <div className='bg-white mb-2 p-2 rounded-xl border border-gray-400'>
                            <p>What payment methods do you accept?</p>
                            <p>We accept all major credit and debit cards, Apple Pay, and Google Pay. All transactions
                                are encrypted and secure.</p>
                        </div>
                        <div className='bg-white mb-2 p-2 rounded-xl border border-gray-400'>
                            <p>How do I track my order?</p>
                            <p>Once your order ships, you'll receive a tracking link via email. You can also check your
                                order status in your account.</p>
                        </div>
                        <div className='bg-white mb-2 p-2 rounded-xl border border-gray-400'>
                            <p>Do you ship internationally?</p>
                            <p>Currently we only ship domestically. International shipping is something we're working on
                                for the future.</p>
                        </div>
                    </div>
                    <div>
                        <p>Send us a message</p>
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
                            <input type='text' className='w-full outline-none'
                                   placeholder='Your message...'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>)
}

export default Support
