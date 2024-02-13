import React from 'react'
import HeaderPart from './headerPart'
import Review from './review'
import HeadPage from '../Layout/headPage'
import HEAD_TITLE from '@/utils/title'


const ClientReview = () => {
  return (
    <div>
      <HeadPage title={HEAD_TITLE.Testimonial}>
      <HeaderPart/>
      <Review/>
      </HeadPage>
    </div>
  )
}

export default ClientReview
