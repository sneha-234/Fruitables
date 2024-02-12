import Layout from '@/components/Layout'
import CartPage from '@/components/cartPage'
import React from 'react'

const Cart = () => {
  return (
    <div>
      <CartPage/>
    </div>
  )
}


Cart.getLayout = function getLayout(page)
{
  return <Layout>{page}</Layout>
}
 
export default Cart