import React from 'react'
import HeaderPart from './headerPart'
import ProductPage from './productPage'
import RealtedProducts from './realtedProducts'
import HeadPage from '../Layout/headPage'
import HEAD_TITLE from '@/utils/title'

const ShopDetailPage = () => {
  return (
    <div>
      <HeadPage title = {HEAD_TITLE.ShopDetail}></HeadPage>
      <HeaderPart/>
       <ProductPage/>
       <RealtedProducts/>
    </div>
  )
}

export default ShopDetailPage
