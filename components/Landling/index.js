import React from 'react'
import Topsection from './topsection'
import Policy from './policy'
import Sale from './sale'
import BannerSection from './banner'
import BestSeller from './bestSeller'
import BestSeller2 from './bestSeller2'
import Fact from './fact'
import Testimonial from './Testimonial'
import HeadPage from '../Layout/headPage'
import HEAD_TITLE from '@/utils/title'

const LandingPage = () => {
  return (
    <div>
     <HeadPage  title = {HEAD_TITLE.home}>
      <Topsection/>
      <Policy/>
      <Sale/>
      <BannerSection/>
      <BestSeller/>
      <BestSeller2/>
      <Fact/>
      <Testimonial/>
      </HeadPage>
    </div>
  )
}

export default LandingPage
