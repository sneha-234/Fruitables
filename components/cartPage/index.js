import React from 'react'
import SingleHeader from './singleHeader'
import CardMain from './cardmain'
import CheckoutCard from './checkoutCard'
import HEAD_TITLE from '@/utils/title'
import HeadPage from '../Layout/headPage'

const CartPage = () => {
  return (
    <div>
      <HeadPage title={HEAD_TITLE.cart}>
      <SingleHeader/>
      <CardMain/>
      <CheckoutCard/>
      </HeadPage>
    </div>
  )
}

export default CartPage
