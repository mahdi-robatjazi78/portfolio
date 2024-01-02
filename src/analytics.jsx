import React from 'react'
import { Analytics } from '@vercel/analytics/react';

const VercelAnalyticsComponent = ({children}) => {
  return (
    <>
      {children}
      <Analytics />
  </>
  )
}

export default VercelAnalyticsComponent