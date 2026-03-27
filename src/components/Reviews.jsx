import { Star } from 'lucide-react';

function Reviews() {
  return (
    <div className='bg-blue-50'>
      <div className='layout-container py-15'>
        <div className='flex flex-col items-center justify-center pb-15'>
          <p className='pb-2 text-xl tracking-widest text-blue-600 uppercase'>
            Testimonials
          </p>
          <p className='pb-3 text-3xl font-bold'>What our customers say</p>
        </div>
        <div className='flex items-stretch justify-center gap-10'>
          <div className='flex w-1/3 flex-col rounded-3xl bg-white pr-5 pl-5'>
            <div className='mt-5 mb-5 flex text-blue-500'>
              <Star size={18} fill='currentColor' />
              <Star size={18} fill='currentColor' />
              <Star size={18} fill='currentColor' />
              <Star size={18} fill='currentColor' />
              <Star size={18} fill='currentColor' />
            </div>

            <p className='line-clamp-2 flex-1 pb-4 leading-relaxed text-gray-500'>
              "Amazing experience. Got my order in two days — quality exceeded
              expectations."
            </p>
            <div className='flex items-center gap-5 pb-4'>
              <div>
                <p className='flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-xl text-blue-800'>
                  S
                </p>
              </div>
              <div>
                <p className='font-semibold'>Sarah K.</p>
                <p className='text-sm text-gray-500'>Regular customer</p>
              </div>
            </div>
          </div>
          <div className='flex w-1/3 flex-col rounded-3xl bg-white pr-5 pl-5'>
            <div className='mt-5 mb-5 flex text-blue-500'>
              <Star size={18} fill='currentColor' />
              <Star size={18} fill='currentColor' />
              <Star size={18} fill='currentColor' />
              <Star size={18} fill='currentColor' />
              <Star size={18} fill='currentColor' />
            </div>

            <p className='line-clamp-2 flex-1 pb-4 leading-relaxed text-gray-500'>
              "Super easy to navigate, checkout was smooth and support helped me
              pick the right size."
            </p>
            <div className='flex items-center gap-5 pb-4'>
              <div>
                <p className='flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-xl text-blue-800'>
                  J
                </p>
              </div>
              <div>
                <p className='font-semibold'>James R.</p>
                <p className='text-sm text-gray-500'>First-time buyer</p>
              </div>
            </div>
          </div>
          <div className='flex w-1/3 flex-col rounded-3xl bg-white pr-5 pl-5'>
            <div className='mt-5 mb-5 flex text-blue-500'>
              <Star size={18} fill='currentColor' />
              <Star size={18} fill='currentColor' />
              <Star size={18} fill='currentColor' />
              <Star size={18} fill='currentColor' />
              <Star size={18} />
            </div>

            <p className='line-clamp-2 flex-1 pb-4 leading-relaxed text-gray-500'>
              "Great prices and a huge catalog. Will definitely be coming back
              for more."
            </p>
            <div className='flex items-center gap-5 pb-4'>
              <div>
                <p className='flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-xl text-blue-800'>
                  E
                </p>
              </div>
              <div>
                <p className='font-semibold'>Emily T.</p>
                <p className='text-sm text-gray-500'>Verified buyer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
