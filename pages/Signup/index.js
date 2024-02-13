import Layout from '@/components/Layout'
import Signup from '@/components/Signup'
import React from 'react'

const SignupPage = () => {
  return (
    <div>
      <Signup/>
    </div>
  )
}
SignupPage.getLayout = function getLayout(page)
{
  return <Layout>{page}</Layout>
}


export default SignupPage


