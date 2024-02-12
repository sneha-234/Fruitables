import React from 'react'
import Topsection from './topsection'
import Policy from './policy'
import Sale from './sale'
import BannerSection from './banner'
import BestSeller from './bestSeller'
import BestSeller2 from './bestSeller2'
import Fact from './fact'
import Testimonial from './Testimonial'

const LandingPage = () => {
  return (
    <div>
      <Topsection/>
      <Policy/>
      <Sale/>
      <BannerSection/>
      <BestSeller/>
      <BestSeller2/>
      <Fact/>
      <Testimonial/>
    </div>
  )
}

export default LandingPage
