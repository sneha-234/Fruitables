import React from 'react'
import SingleHeader from './singleheader'
import Billing from './billing'
import HEAD_TITLE from '@/utils/title'
import HeadPage from '../Layout/headPage'

const Checkout = () => {
  return (
    <div>
      <HeadPage title={HEAD_TITLE.checkout}>
      <SingleHeader/>
      <Billing/>
      </HeadPage>
    </div>
  )
}

export default Checkout
