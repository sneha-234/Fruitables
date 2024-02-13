import Layout from '@/components/Layout'
import LoginPe from '@/components/Login'
import React from 'react'

const Log = () => {
  return (
    <div>
      <LoginPe/>
    </div>
  )
}
Log.getLayout = function getLayout(page)
{
  return <Layout>{page}</Layout>
}


export default Log
