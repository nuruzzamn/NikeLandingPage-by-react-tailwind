import React from 'react'
import { star } from '../assets/icons';

const CustomerReviewCrad = ({imgURL, customerName, rating, feedback}) => {

  return (
    <div className='flex justify-center items-center flex-col'>
        <section className='flex justify-center items-center'>
            <img src={imgURL} alt="" className='object-cover rounded-full h-[120px] w-[120px] mt-4 gap-10' />
        </section>

        <section>
            <h2 className='mt-6 max-w-sm text-center info-text'>{feedback}</h2>
            <section className='mt-3 flex justify-center items-center gap-2.5'>
                <img src={star} alt="" className='object-contain m-0'/>
                <p className='text-xl font-montserrat text-slate-gray'>{rating}</p>
            </section>
            <h2 className='text-2xl font-bold text-center mt-4'>{customerName}</h2>
        </section>
    </div>
  )
}

export default CustomerReviewCrad