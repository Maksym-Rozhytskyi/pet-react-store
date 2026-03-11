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
        <div className='bg-slate-50'>
            <div className='layout-container py-5 '>
                <Link to='/catalog'>← Back to Catalog</Link>
                <div className='flex gap-10 mb-12 mt-4'>
                    <div className='flex-1 bg-white rounded-3xl border border-gray-100 flex items-center justify-center'
                         style={{minHeight: 480}}>
                        <img src={product.thumbnail} alt={product.title} className='max-h-80'/>
                    </div>
                    <div className='flex-1'>
                        <p className='text-xs font-medium uppercase tracking-widest text-gray-400 pb-2'>{product.brand}</p>
                        <p className='pb-2 text-2xl font-bold'>{product.title}</p>
                        <p className='pb-4 text-sm flex gap-5'>{product.tags.map((tag) => (
                            <span key={tag}
                                  className='text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full font-medium'>{tag}</span>
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
                <div>
                    <p className='font-bold text-2xl mb-5'>Customer reviews</p>
                    <div>
                        <div className='flex flex-row gap-5'>
                            {product.reviews.map((review, i) => (
                                <div key={i} className='flex-1 bg-white p-5 rounded-2xl border border-gray-100'>
                                    <div className='flex items-center justify-between mb-5'>
                                        <div className='flex gap-5 items-center'>
                                            <div>
                                                <p className='flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-xl text-blue-800'>{review.reviewerName[0]}</p>
                                            </div>
                                            <div>
                                                <p className='font-bold'>{review.reviewerName}</p>
                                                <p className='text-sm text-gray-500'>{new Date(review.date).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric"
                                                })}</p>
                                            </div>
                                        </div>
                                        <p className='flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-800'>{review.rating}</p>
                                    </div>
                                    <p className='text-gray-500 text-base'>{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>)
}

export default Product