import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { RotateCcw, Shield, Truck } from 'lucide-react';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;
  return (
    <div>
      <Header />
      <div className='bg-slate-50'>
        <div className='layout-container py-5'>
          <Link to='/catalog'>← Back to Catalog</Link>
          <div className='mt-4 mb-12 flex gap-10'>
            <div
              className='flex flex-1 items-center justify-center rounded-3xl border border-gray-100 bg-white'
              style={{ minHeight: 480 }}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className='max-h-80'
              />
            </div>
            <div className='flex-1'>
              <p className='pb-2 text-xs font-medium tracking-widest text-gray-400 uppercase'>
                {product.brand}
              </p>
              <p className='pb-2 text-2xl font-bold'>{product.title}</p>
              <p className='flex gap-5 pb-4 text-sm'>
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className='rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600'
                  >
                    {tag}
                  </span>
                ))}
              </p>
              <p className='pb-8 text-base text-gray-500'>
                {product.description}
              </p>
              <p className='pb-8 text-4xl font-bold'>${product.price}</p>
              <button className='mb-12 w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition-colors hover:bg-indigo-700'>
                Add to Cart
              </button>
              <div className='flex items-center gap-3 pb-4'>
                <Truck className='text-blue-600' />
                <p className='text-sm tracking-wide text-gray-500'>
                  {product.shippingInformation}
                </p>
              </div>
              <div className='flex items-center gap-3 pb-4'>
                <Shield className='text-blue-600' />
                <p className='text-sm tracking-wide text-gray-500'>
                  {product.warrantyInformation}
                </p>
              </div>
              <div className='flex items-center gap-3 pb-4'>
                <RotateCcw className='text-blue-600' />
                <p className='text-sm tracking-wide text-gray-500'>
                  {product.returnPolicy}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className='mb-5 text-2xl font-bold'>Customer reviews</p>
            <div>
              <div className='flex flex-row gap-5'>
                {product.reviews.map((review, i) => (
                  <div
                    key={i}
                    className='flex-1 rounded-2xl border border-gray-100 bg-white p-5'
                  >
                    <div className='mb-5 flex items-center justify-between'>
                      <div className='flex items-center gap-5'>
                        <div>
                          <p className='flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-xl text-blue-800'>
                            {review.reviewerName[0]}
                          </p>
                        </div>
                        <div>
                          <p className='font-bold'>{review.reviewerName}</p>
                          <p className='text-sm text-gray-500'>
                            {new Date(review.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </p>
                        </div>
                      </div>
                      <p className='flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-black'>
                        {review.rating}
                      </p>
                    </div>
                    <p className='text-base text-gray-500'>{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Product;
