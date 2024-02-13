import Layout from '@/components/Layout'
import Contact from '@/components/contact'
import React from 'react'

const ContactPage = () => {
  return (
    <div>
      <Contact/>
    </div>
  )
}
ContactPage.getLayout = function getLayout(page)
{
  return <Layout>{page}</Layout>
}

export default ContactPage
