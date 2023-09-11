import React from 'react'
import CustomerReviewCrad from './CustomerReviewCrad'
import { reviews } from '../constants'

const CustomerReviews = () => {

  return (
    <div className='max-container'>
      <section className='text-center font-montserrat'>
        <h2 className='text-4xl font-semibold'>What Our <span className='text-coral-red'>Customers</span> Say?</h2>
        <p className='text-xl font-palanquin mt-4 m-auto info-text max-w-lg text-gray-500 '>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      </section>

      <section className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
      {reviews && reviews.map((review, index) => (
          <CustomerReviewCrad key={index} {...review} />
        ))}

      </section>
    </div>
  )
}

export default CustomerReviews