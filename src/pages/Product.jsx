import {Link, useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import {RotateCcw, Shield, Truck} from 'lucide-react';


function Product() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    if (!product) return <p>Loading...</p>
    return (<div>
        <Header/>
        <div className='layout-container py-5'>
            <Link to='/catalog'>← Back to Catalog</Link>
            <div className='flex gap-10 mb-12'>
                <div className='flex-1 bg-white rounded-3xl border border-gray-100 flex items-center justify-center'
                     style={{minHeight: 480}}>
                    <img src={product.thumbnail} alt={product.title} className='max-h-80'/>
                </div>
                <div className='flex-1'>
                    <p className='text-xs font-medium uppercase tracking-widest text-gray-400 pb-2'>{product.brand}</p>
                    <p className='pb-2 text-2xl font-bold'>{product.title}</p>
                    <p className='pb-4 text-sm flex gap-5'>{product.tags.map((tag) => (
                        <div>
                            <p className='text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full font-medium'>{tag}</p>
                        </div>
                    ))}</p>
                    <p className='pb-8 text-base text-gray-500'>{product.description}</p>
                    <p className='pb-8 text-4xl font-bold'>${product.price}</p>
                    <button
                        className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-colors mb-12'>
                        Add to Cart
                    </button>
                    <div className='flex gap-3'>
                        <Truck/>
                        <p className='pb-4 text-sm  tracking-wide text-gray-500'>{product.shippingInformation}</p>
                    </div>
                    <div className='flex gap-3'>
                        <Shield/>
                        <p className='pb-4 text-sm tracking-wide text-gray-500'>{product.warrantyInformation}</p>
                    </div>
                    <div className='flex gap-3'>
                        <RotateCcw/>
                        <p className='pb-4 text-sm tracking-wide text-gray-500'>{product.returnPolicy}</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>)
}

export default Product