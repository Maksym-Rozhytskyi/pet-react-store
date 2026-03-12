import {useEffect, useState} from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import {Search} from 'lucide-react';
import {Link} from 'react-router-dom';

const getPages = (current, total) => {
    const pages = [];
    if (total <= 7) {
        for (let i = 1; i <= total; i++) pages.push(i);
        return pages;
    }
    pages.push(1);
    if (current > 3) pages.push('...');
    for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
        pages.push(i);
    }
    if (current < total - 2) pages.push('...');
    pages.push(total);
    return pages;
}

function Catalog() {
    const [product, setProduct] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const skip = (currentPage - 1) * 9;
        window.scrollTo(0, 0);
        const url = query ? `https://dummyjson.com/products/search?q=${query}&limit=9&skip=${skip}` : `https://dummyjson.com/products?limit=9&skip=${skip}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data.products)
                setTotal(data.total)
            })
    }, [currentPage, query])

    const totalPages = Math.ceil(total / 9)

    return (<div>
        <Header/>
        <div className='overflow-hidden bg-slate-50'>
            <div className='layout-container py-5'>
                <div className='mb-5'>
                    <p className='uppercase tracking-widest text-blue-600 pb-2'>Store</p>
                    <p className='text-3xl font-bold'>Catalog</p>
                </div>
                <div
                    className='mb-5 flex items-center gap-2 rounded-xl border border-gray-400 bg-white px-3 py-2 text-sm'>
                    <Search className='max-w-4 text-gray-500'/>
                    <input
                        type='text'
                        className='w-full outline-none'
                        value={query}
                        placeholder='Search products or brand...'
                        onChange={e => {
                            setQuery(e.target.value);
                            setCurrentPage(1);
                        }}
                    />
                </div>
                {product.length === 0 && query ? (<div>
                    <p className='text-lg text-gray-400'>Nothing found</p>
                    <p className='text-sm text-gray-300'>Try a different search query</p>
                </div>) : (<div className='grid gap-5 lg:grid-cols-3'>
                    {product.length === 0 ? (<p>Loading...</p>) : (product.map(p => (
                        <Link key={p.id} to={`/product/${p.id}`}
                              className='block rounded-3xl border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow'>
                            <div
                                className='mb-4 flex items-center justify-center border-b border-gray-200 pb-5'>
                                <img src={p.thumbnail} alt={p.title} className='h-48 object-contain'/>
                            </div>
                            <div>
                                <p className='text-xs font-medium uppercase tracking-widest text-gray-400'>{p.brand}</p>
                                <p className='pb-4 text-xl font-bold'>{p.title}</p>
                                <p className='pb-4 line-clamp-4 text-sm text-gray-500'>{p.description}</p>
                                <div className='flex items-center justify-between pr-2'>
                                    <p className='text-2xl font-bold'>${p.price}</p>
                                    <button
                                        className='rounded-xl bg-blue-600 px-3 py-1 font-bold text-white transition-colors hover:bg-blue-700'>
                                        Buy
                                    </button>
                                </div>
                            </div>
                        </Link>)))}
                </div>)}
                <div className='flex justify-center gap-5 mt-5'>
                    {getPages(currentPage, totalPages).map((page, i) => page === '...' ? (<span key={`dots-${i}`}
                                                                                                className='w-9 h-9 flex items-center justify-center text-gray-400 text-sm'>…</span>) : (
                        <button key={`page-${i}`} onClick={() => setCurrentPage(page)}
                                className={'w-9 h-9 rounded-lg text-sm font-medium transition-colors ' + (currentPage === page ? 'bg-indigo-600 text-white' : 'text-gray-500 hover:bg-gray-100')}>{page}</button>))}
                </div>
            </div>
        </div>
        <Footer/>
    </div>)
}

export default Catalog