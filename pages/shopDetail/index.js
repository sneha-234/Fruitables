import Layout from '@/components/Layout'
import ShopDetailPage from '@/components/shopDetail'
import React from 'react'

const  ShopDetail  = () =>
{
  return (
    <ShopDetailPage/>
  )
}

ShopDetail.getLayout = function getLayout(page)
{
  return <Layout>{page}</Layout>
}


export default ShopDetail
