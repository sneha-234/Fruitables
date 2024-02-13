import Error from '@/components/404'
import Layout from '@/components/Layout'
import React from 'react'

const ErrorMessage = () => {
  return (
    <div>
      <Error/>
    </div>
  )
}

ErrorMessage.getLayout = function getLayout(page)
{
  return <Layout>{page}</Layout>
}

export default ErrorMessage
