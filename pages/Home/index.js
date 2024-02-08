import LandingPage from '@/components/Landling'
import Layout from '@/components/Layout'
import React from 'react'

const Landling = () => {
  return (
    <div>
      <LandingPage/>
    </div>
  )
}

Landling.getLayout = function getLayout(page)
{
  return <Layout>{page}</Layout>
}
 
export default Landling

