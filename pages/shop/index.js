import Layout from '@/components/Layout'
import Shop from '@/components/Shop'
import React from 'react'

const ShopPage = () => {
  return (
    <div>
      <Shop/>
    </div>
  )
}
ShopPage.getLayout = function getLayout(page)
{
  return <Layout>{page}</Layout>
}




export default ShopPage
