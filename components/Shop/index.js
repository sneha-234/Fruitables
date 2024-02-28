import React from 'react'
import HeaderPage from './headerPage'
import FruitsShop from './fruitsShop'
import HeadPage from '../Layout/headPage'
import HEAD_TITLE from '@/utils/title'

const Shop = () => {
  return (
    <div>
        <HeadPage  title = {HEAD_TITLE.Shop}></HeadPage>
      <HeaderPage/>
      <FruitsShop/>
    </div>
  )
}

export default Shop
