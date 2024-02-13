import React from 'react'
import HeaderPart from './headerPart'
import ContactSection from './contact'
import HeadPage from '../Layout/headPage'
import HEAD_TITLE from '@/utils/title'

const Contact = () => {
  return (
    <div>
      <HeadPage title = {HEAD_TITLE.contact}>
      <HeaderPart/>
      <ContactSection/>
      </HeadPage>
    </div>
  )
}

export default Contact
