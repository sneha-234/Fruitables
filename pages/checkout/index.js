import Layout from '@/components/Layout'
import Checkout from '@/components/checkout'
import React from 'react'

const CheckoutPage = () => {
  return (
    <div>
      <Checkout/>
    </div>
  )
}
CheckoutPage.getLayout = function getLayout(page)
{
  return <Layout>{page}</Layout>
}

export default CheckoutPage
