import Layout from '@/components/Layout'
import ClientReview from '@/components/Testimonial'
import React from 'react'

const TestimonialPage = () => {
  return (
    <div>
      <ClientReview/>
    </div>
  )
}

TestimonialPage.getLayout = function getLayout(page)
{
  return <Layout>{page}</Layout>
}


export default TestimonialPage
