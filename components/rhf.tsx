'use client'

import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  name: string
  message: string
}

export default function Rhf() {
  const [data, setData] = useState<Inputs>()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>({
    defaultValues: {
      name: '',
      message: ''
    }
  })

  //   console.log(watch('email'))
  //   console.log('rendering')

  const processForm: SubmitHandler<Inputs> = data => setData(data)

  return (
    <section className='flex gap-6'>
      <form
        onSubmit={handleSubmit(processForm)}
        className='flex flex-1 flex-col gap-4 sm:w-1/2'
      >
        <input
          placeholder='name'
          className='rounded-lg'
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name?.message && (
          <p className='text-sm text-red-400'>{errors.name.message}</p>
        )}

        <input
          placeholder='message'
          className='rounded-lg'
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 4,
              message: 'Message must have at least 4 characters'
            }
          })}
        />
        {errors.message?.message && (
          <p className='text-sm text-red-400'>{errors.message.message}</p>
        )}

        <button className='rounded-lg bg-black py-2 text-white'>Submit</button>
      </form>

      <div className='flex-1 rounded-lg bg-cyan-600 p-8 text-white'>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </section>
  )
}
