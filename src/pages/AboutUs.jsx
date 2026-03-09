import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Features from '../components/Features.jsx';
import {NavLink} from 'react-router-dom'

function AboutUs() {
    return (<div>
        <Header/>
        <div className='bg-slate-50'>
            <div className='layout-container py-5 '>
                <div className='mb-20'>
                    <p className='pb-2 uppercase tracking-widest text-blue-600'>About Us</p>
                    <p className='text-3xl font-bold pb-2'>We believe shopping should be simple</p>
                    <p className='text-xl w-1/2 leading-relaxed text-gray-500'>We created this store to make online
                        shopping
                        simple and straightforward. Only quality goods, fair prices and a convenient process from
                        viewing to
                        delivery.</p>
                </div>
                <div className='flex justify-between gap-5'>
                    <div
                        className='flex-1 bg-white p-6 rounded-2xl border border-gray-100 transition-shadow hover:shadow-md'>
                        <p className='font-bold text-3xl'>100+</p>
                        <p className='leading-relaxed text-gray-500'>Products in catalog</p>
                    </div>
                    <div
                        className='flex-1 bg-white p-6 rounded-2xl border border-gray-100 transition-shadow hover:shadow-md'>
                        <p className='font-bold text-3xl'>12,000+</p>
                        <p className='leading-relaxed text-gray-500'>Happy customers</p>
                    </div>
                    <div
                        className='flex-1 bg-white p-6 rounded-2xl border border-gray-100 transition-shadow hover:shadow-md'>
                        <p className='font-bold text-3xl'>4.8/5</p>
                        <p className='leading-relaxed text-gray-500'>Average rating</p>
                    </div>
                    <div
                        className='flex-1 bg-white p-6 rounded-2xl border border-gray-100 transition-shadow hover:shadow-md'>
                        <p className='font-bold text-3xl'>24/7</p>
                        <p className='leading-relaxed text-gray-500'>Customer support</p>
                    </div>
                </div>
                <Features/>
                <div
                    className='flex text-center flex-col items-center justify-center w-1/2 mx-auto bg-white p-6 rounded-2xl border border-gray-100 transition-shadow hover:shadow-md mb-20'>
                    <p className='font-bold text-2xl mb-5'>Our story</p>
                    <p className='mb-5 leading-relaxed text-gray-500'>This store isn't a real business — it's a learning
                        project. And this section is
                        a little easter
                        egg
                        for anyone curious enough to read.</p>
                    <p className='mb-5 leading-relaxed text-gray-500'>I'm Maksym, a manual QA engineer with 4 years of
                        experience testing mobile
                        applications. My job
                        has
                        always been about attention to detail — finding edge cases, thinking about user flows, asking
                        "what
                        happens if...". That mindset turned out to be surprisingly useful when I started learning
                        frontend.</p>
                    <p className='mb-5 leading-relaxed text-gray-500'>At some point I got tired of being the person who
                        says "this is broken" and
                        wanted to be the
                        person
                        who builds it right from the start. So I enrolled in a frontend course, wrote my first
                        components,
                        broke things, and fixed them.</p>
                    <p className='leading-relaxed text-gray-500'>This store is the result of that journey so far —
                        real API calls, real routing,
                        real design
                        decisions. I'm still learning, still making mistakes, and still improving. Nothing here is
                        perfect,
                        and that's kind of the point. If you're a developer looking at the code — hi. If you're a
                        recruiter
                        — I'm open to opportunities. If you're just browsing — enjoy the fake products.</p>
                </div>
                <div className='flex gap-10 mb-20'>
                    <div className='flex-1 bg-white p-5 rounded-2xl transition-shadow hover:shadow-md'>
                        <p className='font-bold text-2xl mb-5'>Our vision</p>
                        <p className='text-gray-500'>A world where you never have to waste time searching for something
                            you can trust. Where great
                            products are always one click away.</p>
                    </div>
                    <div className='flex-1 bg-indigo-600 text-white p-5 rounded-2xl transition-shadow hover:shadow-md'>
                        <p className='font-bold text-2xl mb-2'>Our mission</p>
                        <p>Make online shopping feel effortless — for everyone, everywhere, every time.</p>
                    </div>
                </div>
                <div className='flex justify-between bg-blue-50 rounded-2xl'>
                    <div className='flex justify-center items-start flex-col p-10'>
                        <p className='text-2xl font-bold'>Ready to start shopping?</p>
                        <p className='text-gray-500'>Browse our full catalog and find something you'll love.</p>
                    </div>
                    <div className='flex justify-center items-start flex-col p-10 '>
                        <NavLink className='bg-indigo-600 p-3 text-white font-bold rounded-2xl' to='/catalog'>Browse
                            catalog</NavLink>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>)
}

export default AboutUs
