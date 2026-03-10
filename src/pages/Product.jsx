import {Link, useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';


function Product() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    if (!product) return <p>Loading...</p>
    return (
        <div>
            <Header/>
            <div className='layout-container py-5'>
                <Link to='/catalog'>← Back to Catalog</Link>
                <p className='text-xs font-medium uppercase tracking-widest text-gray-400'>{product.brand}</p>
                <p className='pb-4 text-xl font-bold'>{product.title}</p>
                <p className='pb-4 text-xl font-bold'>{product.price}</p>
                <p className='pb-4 text-xl font-bold'>{product.description}</p>
                <p className='pb-4 text-xl font-bold'>{product.thumbnail}</p>
                <p className='pb-4 text-xl font-bold'>{product.stock}</p>
                <p className='pb-4 text-xl font-bold'>{product.tags}</p>
                <p className='pb-4 text-xl font-bold'>{product.warrantyInformation}</p>
                <p className='pb-4 text-xl font-bold'>{product.shippingInformation}</p>
                <p className='pb-4 text-xl font-bold'>{product.returnPolicy}</p>
            </div>
            <Footer/>
        </div>
    )
}

export default Product