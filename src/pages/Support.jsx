import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import {ChevronDown, ChevronUp} from 'lucide-react';
import {Disclosure} from '@headlessui/react';
import ContactForm from '../components/ContactForm.jsx';

function Support() {
    return (<div>
        <Header/>
        <div className='bg-slate-50'>
            <div className='layout-container py-5'>
                <div className='mb-20'>
                    <p className='pb-2 uppercase tracking-widest text-blue-600'>Support</p>
                    <p className='text-3xl font-bold pb-2'>How can we help?</p>
                    <p className='text-xl text-gray-500'>Browse the FAQ or send us a message — we'll get back to you
                        shortly.</p>
                </div>
                <div className='flex gap-10'>
                    <div className='flex-2'>
                        <p className='text-xl font-bold pb-5'>Frequently asked questions</p>

                        <Disclosure>
                            {({open}) => (<div className='bg-white mb-2 p-5 rounded-xl border border-gray-400'>
                                <Disclosure.Button className='flex items-center justify-between w-full'>
                                    <p className='font-bold'>How long does delivery take?</p>
                                    {open ? <ChevronUp className='h-4 w-4 text-gray-500'/> :
                                        <ChevronDown className='h-4 w-4 text-gray-500'/>}
                                </Disclosure.Button>
                                <Disclosure.Panel className='text-gray-500 text-sm mt-2'>We deliver within 1–3
                                    business days across the country. Express options may be available at
                                    checkout.</Disclosure.Panel>
                            </div>)}
                        </Disclosure>

                        <Disclosure>
                            {({open}) => (<div className='bg-white mb-2 p-5 rounded-xl border border-gray-400'>
                                <Disclosure.Button className='flex items-center justify-between w-full'>
                                    <p className='font-bold'>Can I return a product?</p>
                                    {open ? <ChevronUp className='h-4 w-4 text-gray-500'/> :
                                        <ChevronDown className='h-4 w-4 text-gray-500'/>}
                                </Disclosure.Button>
                                <Disclosure.Panel className='text-gray-500 text-sm mt-2'>Yes — you can return
                                    any item within 30 days of purchase, no questions asked. Just contact us and
                                    we'll arrange the return.</Disclosure.Panel>
                            </div>)}
                        </Disclosure>

                        <Disclosure>
                            {({open}) => (<div className='bg-white mb-2 p-5 rounded-xl border border-gray-400'>
                                <Disclosure.Button className='flex items-center justify-between w-full'>
                                    <p className='font-bold'>What payment methods do you accept?</p>
                                    {open ? <ChevronUp className='h-4 w-4 text-gray-500'/> :
                                        <ChevronDown className='h-4 w-4 text-gray-500'/>}
                                </Disclosure.Button>
                                <Disclosure.Panel className='text-gray-500 text-sm mt-2'>We accept all major
                                    credit and debit cards, Apple Pay, and Google Pay. All transactions are
                                    encrypted and secure.</Disclosure.Panel>
                            </div>)}
                        </Disclosure>

                        <Disclosure>
                            {({open}) => (<div className='bg-white mb-2 p-5 rounded-xl border border-gray-400'>
                                <Disclosure.Button className='flex items-center justify-between w-full'>
                                    <p className='font-bold'>How do I track my order?</p>
                                    {open ? <ChevronUp className='h-4 w-4 text-gray-500'/> :
                                        <ChevronDown className='h-4 w-4 text-gray-500'/>}
                                </Disclosure.Button>
                                <Disclosure.Panel className='text-gray-500 text-sm mt-2'>Once your order ships,
                                    you'll receive a tracking link via email. You can also check your order
                                    status in your account.</Disclosure.Panel>
                            </div>)}
                        </Disclosure>

                        <Disclosure>
                            {({open}) => (<div className='bg-white mb-2 p-5 rounded-xl border border-gray-400'>
                                <Disclosure.Button className='flex items-center justify-between w-full'>
                                    <p className='font-bold'>Do you ship internationally?</p>
                                    {open ? <ChevronUp className='h-4 w-4 text-gray-500'/> :
                                        <ChevronDown className='h-4 w-4 text-gray-500'/>}
                                </Disclosure.Button>
                                <Disclosure.Panel className='text-gray-500 text-sm mt-2'>Currently we only ship
                                    domestically. International shipping is something we're working on for the
                                    future.</Disclosure.Panel>
                            </div>)}
                        </Disclosure>
                    </div>
                    <ContactForm/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>);
}

export default Support;