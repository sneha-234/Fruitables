import React from 'react'
import Headersingle from './headersingle'
import ErrorPage from './error'
import HEAD_TITLE from '@/utils/title'
import HeadPage from '../Layout/headPage'

const Error = () => {
  return (
    <div>
      <HeadPage title={HEAD_TITLE.Error}>
      <Headersingle/>
      <ErrorPage/>
      </HeadPage>
    </div>
  )
}

export default Error
