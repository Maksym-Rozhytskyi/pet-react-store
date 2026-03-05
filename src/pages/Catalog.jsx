import {useEffect, useState} from 'react';
import Header from '../components/Header.jsx';

function Catalog() {
    const [product, setProduct] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState(0);


    useEffect(() => {
        const skip = (currentPage - 1) * 9;
        window.scrollTo(0, 0);
        fetch(`https://dummyjson.com/products?limit=9&skip=${skip}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data.products)
                setTotal(data.total)
            })
    }, [currentPage])

    const totalPages = Math.ceil(total / 9)

    return (<div>
        <Header/>
        <div className='mx-auto w-full max-w-7xl px-2 py-4'>
            <div className='flex flex-wrap justify-between'>
                {product.length === 0 ? (<p>Loading...</p>) : (product.map(p => (
                    <div key={p.id} className='mb-6 box-border w-100 border p-4'>
                        <img src={p.thumbnail} alt={p.title} className='w-100'/>
                        <p className='pb-4 text-2xl font-bold'>{p.title}</p>
                        <p className='pb-4 text-sm'>{p.description}</p>
                        <div className='flex justify-end gap-2 pr-2'>
                            <p className='text-2xl font-bold'>{p.price}$</p>
                            <button
                                className='rounded-lg bg-blue-600 px-3 py-1 font-bold text-white shadow-lg transition duration-150 ease-in-out hover:bg-blue-700'>Buy
                            </button>
                        </div>
                    </div>)))}
            </div>
            <div className='flex justify-center gap-5'>
                {Array.from({length: totalPages}, (_, i) => i + 1).map(page => (
                    <button key={page} onClick={() => setCurrentPage(page)}
                            className={currentPage === page ? 'border p-1 text-xl font-bold underline' : 'text-gray-800'}>
                        {page}
                    </button>))}
            </div>
        </div>
    </div>)
}

export default Catalog
