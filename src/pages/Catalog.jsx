import {useEffect, useState} from "react";
import Header from "../components/Header.jsx";

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
        <div className="max-w-7xl mx-auto w-full py-4 px-2">
            <div className="flex flex-wrap justify-between">
                {product.length === 0 ? (<p>Loading...</p>) : (product.map(p => (
                    <div key={p.id} className='border w-100 p-4 box-border pb-4 mb-6'>
                        <img src={p.thumbnail} alt={p.title} className='w-100 justify-center'/>
                        <p className='font-bold text-2xl justify-center pb-4'>{p.title}</p>
                        <p className='text-sm pb-4'>{p.description}</p>
                        <div className='flex justify-end gap-2 pr-2'>
                            <p className='text-2xl font-bold'>{p.price}$</p>
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-lg shadow-lg transition duration-150 ease-in-out">Buy
                            </button>
                        </div>
                    </div>)))}
            </div>
            <div className="flex flex-row gap-5 justify-center">
                {Array.from({length: totalPages}, (_, i) => i + 1).map(page => (
                    <button key={page} onClick={() => setCurrentPage(page)}
                            className={currentPage === page ? 'font-bold text-xl underline border p-1' : 'text-gray-800'}>
                        {page}
                    </button>))}
            </div>
        </div>
    </div>)
}

export default Catalog