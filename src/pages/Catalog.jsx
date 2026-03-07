import {useEffect, useState} from 'react';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import {Search} from 'lucide-react';

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
        <div className='bg-slate-50 overflow-hidden'>
            <div className='mx-auto w-full max-w-7xl px-2 py-5'>
                <div className='mb-5'>
                    <p className='uppercase tracking-widest text-blue-600'>Store</p>
                    <p className='text-3xl font-bold'>Catalog</p>
                </div>
                <div
                    className='rounded-xl box-border border border-gray-400 bg-white px-3 py-2 text-sm mb-5 flex gap-2 items-center'>
                    <Search className='max-w-4 text-gray-500'/>
                    <input type='text'
                           className='w-full outline-none'
                           value={query} placeholder='Search products or brand...' onChange={e => {
                        setQuery(e.target.value);
                        setCurrentPage(1);
                    }}/>
                </div>
                {product.length === 0 && query ? (<div>
                    <p className='text-gray-400 text-lg'>Nothing found</p>
                    <p className='text-gray-300 text-sm'>Try a different search query</p>
                </div>) : (<div className='flex flex-wrap gap-5'>
                        {product.length === 0 ? (<p>Loading...</p>) : (product.map(p => (<div key={p.id}
                                                                                              className='mb-6 box-border w-100 rounded-3xl border border-gray-200 bg-white p-4'>
                            <div className='mb-4 pb-5 flex items-center justify-center border-b border-gray-200'>
                                <img src={p.thumbnail} alt={p.title} className='w-1/2'/>
                            </div>
                            <div>
                                <p className='text-xs font-medium uppercase tracking-widest text-gray-400'>{p.brand}</p>
                                <p className='pb-4 text-xl font-bold'>{p.title}</p>
                                <p className='pb-4 text-sm text-gray-500 line-clamp-4'>{p.description}</p>
                                <div className='flex items-center justify-between pr-2'>
                                    <p className='text-2xl font-bold'>${p.price}</p>
                                    <button
                                        className='rounded-xl bg-blue-600 px-3 py-1 font-bold text-white transition-colors hover:bg-blue-700'>Buy
                                    </button>
                                </div>
                            </div>

                        </div>)))}
                    </div>

                )}
                <div className='flex justify-center gap-5'>
                    {Array.from({length: totalPages}, (_, i) => i + 1).map(page => (
                        <button key={page} onClick={() => setCurrentPage(page)}
                                className={currentPage === page ? 'border p-1 text-xl font-bold underline' : 'text-gray-800'}>
                            {page}
                        </button>))}
                </div>
            </div>
        </div>
        <Footer/>
    </div>)
}

export default Catalog
