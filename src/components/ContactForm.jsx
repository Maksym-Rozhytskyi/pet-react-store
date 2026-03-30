import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success('Successfully sent!');
    reset();
  };

  return (
    <div className='flex-1'>
      <p className='pb-5 text-xl font-bold'>Send us a message</p>
      <div className='flex items-center gap-2 rounded-xl border border-gray-400 bg-white px-3 py-2 text-sm'>
        <input
          {...register('name', { required: 'Enter your name' })}
          type='text'
          className='w-full outline-none'
          placeholder='Your name'
        />
      </div>
      {errors.name && (
        <p className='mt-2 mb-4 ml-2 text-xs text-red-500'>
          {errors.name.message}
        </p>
      )}
      {!errors.name && <div className='mb-5' />}
      <div className='flex items-center gap-2 rounded-xl border border-gray-400 bg-white px-3 py-2 text-sm'>
        <input
          {...register('email', {
            required: 'Enter your email',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Invalid email address',
            },
          })}
          type='text'
          className='w-full outline-none'
          placeholder='Your email'
        />
      </div>
      {errors.email && (
        <p className='mt-2 mb-4 ml-2 text-xs text-red-500'>
          {errors.email.message}
        </p>
      )}
      {!errors.email && <div className='mb-5' />}
      <div className='flex items-center gap-2 rounded-xl border border-gray-400 bg-white px-3 py-2 text-sm'>
        <textarea
          {...register('message', {
            required: 'Enter a message',
            minLength: { value: 10, message: 'Minimum 10 symbols' },
          })}
          className='min-h-24 w-full resize-none outline-none'
          placeholder='Your message...'
        />
      </div>
      {errors.message && (
        <p className='mt-2 mb-4 ml-2 text-xs text-red-500'>
          {errors.message.message}
        </p>
      )}
      {!errors.message && <div className='mb-5' />}
      <button
        type='button'
        onClick={handleSubmit(onSubmit)}
        disabled={isSubmitting}
        className='w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition-colors hover:bg-indigo-700 disabled:bg-indigo-400'
      >
        {isSubmitting ? 'Sending...' : 'Send message'}
      </button>
    </div>
  );
}

export default ContactForm;
