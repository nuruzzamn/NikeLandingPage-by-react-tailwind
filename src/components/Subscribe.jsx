import React from 'react'
import Button from './Button/Button'

const Subscribe = () => {
  return (
    <div id='contact-us' className='max-container flex justify-between font-montserrat items-center max-lg:flex-col gap-10'>
      <section className=''>
          <h2 className='lg:text-4xl text-3xl font-semibold '>Sign Up for <span className='font-palanquin text-coral-red leading-normal'> Updates </span> <br /> & Newsletter</h2>
      </section>

      <section className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>

        <input type="text" placeholder='subscribe@nike.com' className='input max-[600px]:text-center'
        />
        <section className=' items-center flex max-sm:justify-end max-sm:w-full max-[600px]:justify-center'>
          <Button label={"Sign up"} hover={`hover:bg-black`}/>
        </section>
      </section>
    </div>
  )
}

export default Subscribe